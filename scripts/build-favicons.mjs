import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const pub = path.join(root, "public")

/**
 * Remove backgrounds: solid black, light neutrals, checkerboard haze.
 * Keeps gold (warm chroma).
 */
function stripNeutralBackground(data, width, height) {
  const out = Buffer.from(data)
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i]
    const g = out[i + 1]
    const b = out[i + 2]
    const a = out[i + 3]
    if (a < 8) continue

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const spread = max - min
    const avg = (r + g + b) / 3

    // Warm gold / metal: keep if clearly chromatic
    const warm = r + g > b * 1.22 && max > 70
    if (warm && spread > 16) continue

    // Solid black / near-black square background
    if (max < 55 && spread < 28) {
      out[i + 3] = 0
      continue
    }
    if (avg < 42 && spread < 22) {
      out[i + 3] = 0
      continue
    }

    // Near-neutral light areas → transparent
    if (spread < 32 && avg > 95) {
      out[i + 3] = 0
      continue
    }
    if (avg > 235 && spread < 50) {
      out[i + 3] = 0
      continue
    }
  }
  return out
}

async function main() {
  const inputCandidates = [
    path.join(pub, "logo-favicon-source.png"),
    path.join(pub, "logo-source.png"),
    path.join(pub, "logo-scripta.png"),
  ]
  const input = inputCandidates.find((p) => fs.existsSync(p))
  if (!input) {
    console.error("No source PNG found. Add public/logo-favicon-source.png")
    process.exit(1)
  }

  // Read fully into memory so we can overwrite logo-scripta.png safely
  const inputBuf = fs.readFileSync(input)
  const { data, info } = await sharp(inputBuf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  if (info.channels !== 4) {
    console.error("Expected RGBA")
    process.exit(1)
  }

  const cleaned = stripNeutralBackground(data, info.width, info.height)

  let basePng = await sharp(cleaned, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toBuffer()

  // Crop empty margin so the mark fills more of small favicon pixels
  try {
    basePng = await sharp(basePng)
      .trim({ threshold: 12 })
      .png()
      .toBuffer()
  } catch {
    // trim can throw if fully empty
  }

  fs.writeFileSync(path.join(pub, "logo-scripta.png"), basePng)

  const sizes = [32, 48, 64, 180]
  for (const size of sizes) {
    const buf = await sharp(basePng)
      .resize(size, size, {
        fit: "contain",
        position: "centre",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
        kernel: sharp.kernel.lanczos3,
      })
      .png()
      .toBuffer()
    const name =
      size === 180
        ? "apple-icon.png"
        : size === 32
          ? "favicon-32.png"
          : size === 48
            ? "favicon-48.png"
            : "favicon-64.png"
    fs.writeFileSync(path.join(pub, name), buf)
  }

  fs.writeFileSync(
    path.join(pub, "favicon.png"),
    await sharp(basePng)
      .resize(48, 48, {
        fit: "contain",
        position: "centre",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer(),
  )
  fs.copyFileSync(path.join(pub, "favicon-32.png"), path.join(pub, "icon-light-32x32.png"))
  fs.copyFileSync(path.join(pub, "favicon-32.png"), path.join(pub, "icon-dark-32x32.png"))

  const appIcon = path.join(root, "app", "icon.png")
  fs.copyFileSync(path.join(pub, "favicon-64.png"), appIcon)

  console.log("Favicons built from:", path.basename(input))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
