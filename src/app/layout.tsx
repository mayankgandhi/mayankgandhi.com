import type { Metadata } from 'next'
import './globals.css'

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
      </head>
      <body>{children}</body>
    </html>
  )
}
