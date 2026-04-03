import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Betonea — Dekorativna betonska galanterija | Lapovo, Srbija',
    template: '%s | Betonea',
  },
  description:
    'Betonea — proizvođač dekorativne betonske galanterije. Žardinjere, skulpture, fontane, stubovi, balustrade i urbani mobilijar. Ručna izrada, Lapovo, Srbija.',
  metadataBase: new URL('https://betonea.com'),
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://betonea.com',
    siteName: 'Betonea',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
