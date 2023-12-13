import NavBar from "@/components/navbars/NavBar";

function NotFound() {

    return (
        <>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">

                <p className="text-xl mb-8">
                    Vaya, esta página no existe.
                </p>
            </main>
        </>

    )
}

export default NotFound;
