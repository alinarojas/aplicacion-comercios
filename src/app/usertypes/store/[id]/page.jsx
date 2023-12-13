// Página con informacion del comercio para los comercios

"use client" 

import React, { useState, useEffect } from 'react';

import StoreDetailsSection from '@/components/store-related/StoreDetailsSection';
import ReviewsShowcase from '@/components/widgets/ReviewsShowcase';

// Esta función obtiene la información del comercio y no debería ser una función asíncrona.
function getStoreId(storeId) {
    return fetch(`/api/store-settings?id=${storeId}`)
        .then(res => {
            if (!res.ok) {
                console.error('Error en la respuesta de la API:', res.statusText);
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .catch(error => {
            console.error('Error al realizar la solicitud a la API:', error);
        });
}

function StoreShowcase({ params }) {
    const [store, setStore] = useState(null);

    useEffect(() => {
        if (params && params.id) {
            getStoreId(params.id).then(data => {
                setStore(data);
            });
        }
    }, [params]);


    return (
        <>
            <main className="bg-gray-100">
                <div className="container mx-auto px-4">

                    {store && <StoreDetailsSection store={store} />}

                    {/* Sección de reseñas */}
                    <ReviewsShowcase params={params.id} />
                </div>
            </main>
        </>
    );

}

export default StoreShowcase;
