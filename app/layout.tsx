import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Alex_Brush, Cormorant_Garamond, DM_Mono, Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600']
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic']
})

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  variable: '--font-script',
  weight: ['400']
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500']
})

export const metadata: Metadata = {
  title: 'AUREX — Fine Jewellery Collection | House of Legacy, Trust, and Tradition',
  description:
    'Aurex is a house of legacy, trust, and tradition. Merging international haute joaillerie trends with 10th-generation Jaipur craftsmanship, Antwerp diamonds, and rare Colombian emeralds.',
  keywords: [
    'Aurex Jewellery',
    'Haute Joaillerie',
    'Colombian Emeralds',
    'Antwerp Diamonds',
    'Jaipur Jewellery Heritage',
    'Polki Chokers',
    'Bespoke Bridal Jewellery'
  ],
  authors: [{ name: 'Aurex Fine Jewellery' }],
  icons: {
    icon: '/aurex-monogram.png',
    apple: '/aurex-monogram.png'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: '#0c0c0c'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} ${alexBrush.variable} ${dmMono.variable} dark`}
    >
      <body className="bg-[#0b0b0b] text-[#f3ede4] antialiased selection:bg-[#c5a059]/30 selection:text-[#f8f5ee]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
