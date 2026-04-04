import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const pub = path.join(root, "public")

const candidates = [
  path.join(
    process.env.USERPROFILE || "",
    ".cursor",
    "projects",
    "c-Users-by987-Downloads-b-3afurejGu5D-1774879244185",
    "assets",
  ),
]

function newestMatching(dir, predicate) {
  if (!fs.existsSync(dir)) return null
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let best = null
  let bestM = 0
  for (const e of entries) {
    if (!e.isFile() || !e.name.endsWith(".png")) continue
    if (!predicate(e.name)) continue
    const full = path.join(dir, e.name)
    const m = fs.statSync(full).mtimeMs
    if (m >= bestM) {
      bestM = m
      best = full
    }
  }
  return best
}

function findSourcePng(dir) {
  const scripta = newestMatching(dir, (n) => n.includes("scripta"))
  if (scripta) return scripta
  const gemini = newestMatching(dir, (n) => n.includes("Gemini_Generated_Image"))
  if (gemini) return gemini
  return null
}

let found = null
for (const dir of candidates) {
  found = findSourcePng(dir)
  if (found) break
}

if (!found) {
  console.error("No scripta-*.png or Gemini_*.png found under .cursor/.../assets")
  process.exit(1)
}

const dest = path.join(pub, "logo-favicon-source.png")
fs.copyFileSync(found, dest)
console.log("Imported:", found, "->", dest)
