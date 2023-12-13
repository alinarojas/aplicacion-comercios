// Navbar de administradores

"use client"

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

function AdminNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-sm">
      
      <div className="flex items-center gap-4">

        <Image src="/house.png" alt="Emporio Cives Logo" width={30} height={30} />

        <Link href="/usertypes/admin" className="text-black font-bold text-lg">
          Emporio Cives
        </Link>

      </div>

      <button className="md:hidden" onClick={toggleNav}>
        <Image src="/menu_ham.svg" alt="Menú" width={30} height={30} />
      </button>

      <ul className={`md:flex gap-4 items-center ${isOpen ? 'flex flex-col absolute top-16 inset-x-0 p-4 bg-white shadow-md' : 'hidden'}`}>
        
        <li>
          <Link href="/usertypes/admin" className="text-gray-600 hover:text-black transition-colors">
            Home
          </Link>
        </li>

        <li>
          <Link href="/usertypes/admin/browse" className="text-gray-600 hover:text-black transition-colors">
            Buscar
          </Link>
        </li>

        <li onClick={toggleDropdown} className="cursor-pointer">
          Admin
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <Link href="/usertypes/admin/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                ⚙️ Configuración
              </Link>
              <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                🚪 Cerrar sesión
              </Link>
            </div>
          )}
        </li>

      </ul>

    </nav>
  );
}

export default AdminNavBar;
