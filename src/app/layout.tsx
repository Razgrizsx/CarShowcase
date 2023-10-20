import type { Metadata } from 'next'
import './globals.css'
import NavBar from './components/navbar'
import Footer from './components/footer'


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
      <body className="relative">
        <NavBar/>    
        {children}
        <Footer/>
      </body>
    </html>
  )
}
