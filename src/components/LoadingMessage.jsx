import Image from "next/image";

function LoadingMessage() {

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <Image
                src="/loading.gif"
                alt="Loading gif"
                width={50}
                height={50}
                layout="intrinsic"
            />

            <p>Cargando...</p>
        </div>
    );
}

export default LoadingMessage;
