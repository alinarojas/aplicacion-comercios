import Link from "next/link";

function AdminSettingsPage() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-6">
                <h1 className="mb-4 text-3xl font-bold text-center">Configuración</h1>

                <ul className="flex gap-4 items-center relative">
                    <li>
                        <Link href="/usertypes/admin/settings/new-store" className="bg-black text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                            Dar de alta un comercio
                        </Link>
                    </li>

                    <li>
                        <Link href="/usertypes/admin/browse/name" className="bg-black text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                            Filtrar comercios por nombre
                        </Link>
                    </li>

                    <li>
                        <Link href="/usertypes/admin/browse/city" className="bg-black text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                            Filtrar comercios por ciudad
                        </Link>
                    </li>
                </ul>
                
            </main>

        </>

    );
}

export default AdminSettingsPage;
