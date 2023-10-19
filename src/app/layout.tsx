import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Car ShowCase',
  description: 'Descubre los mejores autos del mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  )
}
