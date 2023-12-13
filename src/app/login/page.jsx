import Link from "next/link";
import NavBar from "@/components/navbars/NavBar";
import Image from "next/image";

function LoginPage() {
    return (
        <>
            <NavBar />
            <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12">

                <h2 className="mb-8 text-4xl font-bold text-center text-gray-900">
                    Seleccione su tipo de cuenta
                </h2>

                <div className="w-full max-w-4xl">
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <li className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out">
                            <Link href="/login/user">
                                <div className="p-6 cursor-pointer flex flex-col items-center justify-center">
                                    <Image src="/login-icons/user.png" alt="User icon" width={180} height={200} />
                                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Usuario</h3>
                                    <p className="text-sm text-gray-600">Acceda como usuario</p>
                                </div>
                            </Link>
                        </li>

                        <li className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out">
                            <Link href="/login/store">
                                <div className="p-6 cursor-pointer flex flex-col items-center justify-center">
                                    <Image src="/login-icons/store.png" alt="Store icon" width={180} height={200} />
                                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Comercio</h3>
                                    <p className="text-sm text-gray-600">Acceda como comercio</p>
                                </div>
                            </Link>
                        </li>

                        <li className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out">
                            <Link href="/login/admin">
                                <div className="p-6 cursor-pointer flex flex-col items-center justify-center">
                                    <Image src="/login-icons/admin.png" alt="Admin icon" width={180} height={200} />
                                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Administrador</h3>
                                    <p className="text-sm text-gray-600">Acceda como administrador</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default LoginPage;
