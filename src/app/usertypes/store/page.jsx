import StoresShowcase from "@/components/widgets/StoresShowcase";


function StoreHomePage() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">
                <StoresShowcase userType='store'/>
            </main>
        </>

    );
}

export default StoreHomePage;
