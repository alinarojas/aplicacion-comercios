// Navbar de usuarios no registrados

"use client"

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-sm">
      
      <div className="flex items-center gap-4">
        {/* Logo del menú */}
        <Image src="/house.png" alt="Emporio Cives Logo" width={30} height={30} />

        {/* Título del menú */}
        <Link href="/" className="text-black font-bold text-lg">
          Emporio Cives
        </Link>
      </div>

      {/* Botón de menú hamburguesa */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Image src="/menu_ham.svg" alt="Menú" width={30} height={30} />
      </button>

      {/* Enlaces del menú */}
      <ul className={`md:flex gap-6 items-center ${isOpen ? 'flex flex-col absolute top-16 inset-x-0 p-4 bg-white shadow-md' : 'hidden'}`}>
        <li>
          <Link href="/" className="text-gray-600 hover:text-black transition-colors">
            Home
          </Link>
        </li>

        <li>
          <Link href="/browse" className="text-gray-600 hover:text-black transition-colors">
            Buscar
          </Link>
        </li>

        <li>
          <Link href="/login" className="bg-black text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Iniciar sesión
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
