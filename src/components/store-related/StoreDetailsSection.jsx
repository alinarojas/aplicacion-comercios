import React from 'react';
import Image from 'next/image';

function StoreDetailsSection({ store }) {
    return (
        <section className="py-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">{store.businessName}</h2>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                    {
                        store.photos && store.photos.photo1
                            ? <Image
                                src={"/photos/" + store.photos.photo1}
                                alt="Imagen principal"
                                width={600}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                            />
                            : <Image
                                src="/photos/not-found.png"
                                alt="Imagen no encontrada"
                                width={600}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                            />
                    }
                </div>
                <div className="w-full lg:w-1/2 px-4">
                    <div className="mb-4">
                        <p><strong>Dirección:</strong> {store.address}</p>
                        <p><strong>Email:</strong> {store.email}</p>
                        <p><strong>Teléfono:</strong> {store.contactPhone}</p>
                        <p><strong>Ciudad:</strong> {store.city}</p>
                        <p><strong>Actividad:</strong> {store.activity}</p>
                        <p><strong>Título:</strong> {store.title}</p>
                        <p><strong>Resumen:</strong> {store.summary}</p>
                        <p><strong>Nota:</strong> {store.scoring}</p>
                    </div>
    
                    {/* Display Texts */}
                    <div>
                        <strong>Textos:</strong>
                        <ul>
                            {Object.values(store.texts).map((text, index) => (
                                <li key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
    
            {/* Display Additional Photos */}
            <div className="mt-8">
                <div className="flex flex-wrap -mx-1 gap-5">
                    {Object.values(store.photos).slice(1).map((photo, index) => 
                            <Image
                                key={index}
                                src={"/photos/" + photo}
                                alt={photo}
                                width={150}
                                height={150}
                                layout="intrinsic"
                            />
                    )}
                </div>
            </div>
        </section>
    );
    
}

export default StoreDetailsSection;
