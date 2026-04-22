import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading",
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: 'SCRIPTA DİJİTAL | Premium Dijital Ajans',
  description: 'Vizyonunuzu anlatan dijital çözümler üretiyoruz. Seçici yaratıcı profesyoneller ve üst düzey markalar için butik dijital deneyimler.',
  icons: {
    icon: [
      {
        url: '/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        url: '/favicon-64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${manrope.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
