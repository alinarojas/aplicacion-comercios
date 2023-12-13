import { Inter } from 'next/font/google';
import UserNavBar from '@/components/navbars/UserNavBar';

const inter = Inter({ subsets: ['latin'] });

function LayoutUser({ children }) {
  return (
    <>
      <UserNavBar />
      <div className={inter.className}>
        {children}
      </div>
    </>
  );
}

export default LayoutUser;
