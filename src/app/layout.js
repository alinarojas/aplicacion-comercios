// Imports
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// Metadatos
export const metadata = {
  title: 'Emporio Cives',
  description: 'Aplicación de comercios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Contenido de la página */}
        {children}

        {/* Pie de página */}
        <Footer/>

      </body>
    </html>
  )
}
