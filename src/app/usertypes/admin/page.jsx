import StoresShowcase from "@/components/widgets/StoresShowcase";

function AdminHomePage() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">
                <StoresShowcase userType='admin' />
            </main>
        </>

    );
}

export default AdminHomePage;
