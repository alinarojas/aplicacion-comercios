import { Inter } from 'next/font/google'
import StoreNavBar from '@/components/navbars/StoreNavBar'

const inter = Inter({ subsets: ['latin'] })

export default function LayoutStore({ children }) {
  return (
    <>
      <StoreNavBar />
      {children}
    </>
  )
}
