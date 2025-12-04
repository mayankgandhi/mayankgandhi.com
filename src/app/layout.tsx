import type { Metadata } from 'next'
import './globals.css'
import Toolbar from '@/components/Toolbar'

export const metadata: Metadata = {
  title: 'Mayank Gandhi - Senior iOS Engineer',
  description: 'Crafting exceptional iOS experiences with expertise in scalable architecture, performance optimization, and team leadership',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Toolbar />
        {children}
      </body>
    </html>
  )
}
