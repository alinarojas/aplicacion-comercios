
// Imports
import Link from "next/link";
import Image from 'next/image';

// Componentes
import NavBar from '@/components/navbars/NavBar'
import StoresShowcase from "@/components/widgets/StoresShowcase";



function Home() {

  return (
    <>
      <NavBar />

      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">

        <div className="text-center mb-12">

          <h1 className="text-6xl font-bold mb-4">
            Descubre lo nuevo, tu experiencia de compra reimaginada
          </h1>
          <p className="text-xl mb-8">
            Navega, explora, disfruta: tu destino digital personalizado
          </p>

          <Link href="/sign-up" className="bg-black text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Únete a la comunidad
          </Link>
        </div>

        <div className="mb-12"> {/* Añadido contenedor y margen para la imagen */}
          <Image src="/banner.png" alt="Banner" width={600} height={600} />
        </div>

        <StoresShowcase />

      </main>
    </>
  )
}

export default Home;

