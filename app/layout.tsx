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
  metadataBase: new URL('https://www.aurex.in'),
  title: 'AUREX — Haute Joaillerie & Fine Jewellery | House of Legacy, Trust, and Tradition',
  description:
    'Aurex is a house of legacy, trust, and tradition. Merging international haute joaillerie trends with 10th-generation Jaipur craftsmanship, Antwerp diamonds, and rare Colombian emeralds.',
  keywords: [
    'Aurex Jewellery',
    'Haute Joaillerie',
    'Colombian Emeralds',
    'Antwerp Diamonds',
    'Jaipur Jewellery Heritage',
    'Polki Chokers',
    'Bespoke Bridal Jewellery',
    '18K Gold Jewellery',
    'Neeru Designer Jewellery'
  ],
  authors: [{ name: 'Aurex Fine Jewellery', url: 'https://www.aurex.in' }],
  creator: 'Aurex Fine Jewellery',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aurex.in',
    siteName: 'Aurex Fine Jewellery',
    title: 'AUREX — Haute Joaillerie & Fine Jewellery Maison',
    description:
      'A house of legacy, trust, and tradition. 10th-generation Jaipur fine jewellery, rare Colombian emeralds, and certified Antwerp diamonds.',
    images: [
      {
        url: '/dark-paper-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurex Fine Jewellery Collection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUREX — Haute Joaillerie & Fine Jewellery Maison',
    description:
      'A house of legacy, trust, and tradition. 10th-generation Jaipur fine jewellery, rare Colombian emeralds, and certified Antwerp diamonds.',
    images: ['/dark-paper-bg.jpg']
  },
  icons: {
    icon: [
      { url: '/aurex-monogram.png', sizes: '32x32', type: 'image/png' },
      { url: '/aurex-monogram.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [{ url: '/aurex-monogram.png', sizes: '180x180', type: 'image/png' }]
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: '#141414'
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
