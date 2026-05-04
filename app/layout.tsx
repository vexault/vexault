import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vevault | Enterprise Sneaker Arbitrage Intelligence',
  description: 'Autonomous AI agents that monitor 1000+ retail endpoints, snipe profitable drops, and maximize resale profits in real-time.',
  keywords: ['sneaker', 'arbitrage', 'AI', 'automation', 'resale', 'drops', 'enterprise'],
  authors: [{ name: 'Vevault' }],
  openGraph: {
    title: 'Vevault | Enterprise Sneaker Arbitrage Intelligence',
    description: 'Autonomous AI agents that monitor 1000+ retail endpoints, snipe profitable drops, and maximize resale profits in real-time.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vevault | Enterprise Sneaker Arbitrage Intelligence',
    description: 'Autonomous AI agents that monitor 1000+ retail endpoints, snipe profitable drops, and maximize resale profits in real-time.',
  },
}

export const viewport: Viewport = {
  themeColor: '#00ff9f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-[#0a0a0a]`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
