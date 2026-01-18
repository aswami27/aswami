import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Anirudh Swami | Senior Data Scientist & ML Engineer',
  description: 'Senior Data Scientist with 5+ years of experience in ML, AI, and analytics across Retail, Finance, and Healthcare. Azure certified professional delivering measurable business impact.',
  keywords: ['Data Scientist', 'Machine Learning', 'AI', 'Azure', 'Python', 'Analytics', 'Portfolio'],
  authors: [{ name: 'Anirudh Swami' }],
  openGraph: {
    title: 'Anirudh Swami | Senior Data Scientist & ML Engineer',
    description: 'Senior Data Scientist with 5+ years of experience in ML, AI, and analytics.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1a1f2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased selection:bg-primary/20 selection:text-primary">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
