import { Inter } from 'next/font/google'
import AdminNavBar from '@/components/navbars/AdminNavBar'

const inter = Inter({ subsets: ['latin'] })

export default function LayoutAdmin({ children }) {
  return (
    <>

        <AdminNavBar />
        {children}

    </>
  )
}
