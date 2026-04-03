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
    default: 'Betonska Galanterija - Betonea Lapovo',
    template: '%s | Betonea',
  },
  description:
    'Betonska galanterija Betonea Lapovo – skulpture od betona, betonski elementi i betonska dekoracija po vašoj želji.',
  metadataBase: new URL('https://betonea.com'),
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'bs_BA',
    url: 'https://betonea.com',
    siteName: 'Betonea',
    title: 'Betonska Galanterija - Betonea Lapovo',
    description: 'Betonska galanterija Betonea Lapovo – skulpture od betona, betonski elementi i betonska dekoracija po vašoj želji.',
    images: [{ url: '/og-logo.png', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Betonska Galanterija - Betonea Lapovo',
    description: 'Betonska galanterija Betonea Lapovo – skulpture od betona, betonski elementi i betonska dekoracija po vašoj želji.',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large' as const,
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
