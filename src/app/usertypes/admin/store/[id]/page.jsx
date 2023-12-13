// Página con informacion del comercio para los administradores

"use client"

import React, { useState, useEffect } from 'react';;

import StoreDetailsSection from '@/components/store-related/StoreDetailsSection';
import ReviewsShowcase from '@/components/widgets/ReviewsShowcase';


// Obtiene la información del comercio
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

function deleteStore(storeId) {
    return fetch(`/api/store-settings?id=${storeId}`, { method: 'DELETE' })
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

function StorePage({ params }) {
    const [store, setStore] = useState(null);

    useEffect(() => {
        if (params && params.id) {
            getStoreId(params.id).then(data => {
                setStore(data);
            });
        }
    }, [params]);

    const handleDelete = () => {
        // Mensaje de confirmación
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este comercio? Esta acción es irreversible.");

        if (confirmDelete) {
            if (params && params.id) {
                deleteStore(params.id).then(() => {
                    window.location.href = "/usertypes/admin"
                });
            }
        }
    };

    return (
        <>
            <main className="bg-gray-100">
                <div className="container mx-auto px-4">
                    {/* Detalles del comercio */}
                    {store && <StoreDetailsSection store={store} />}

                    {/* Sección de reseñas */}
                    <ReviewsShowcase params={params.id} />

                    {/* Contenedor para el botón */}
                    <div className="flex justify-start mt-4">
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                            Eliminar comercio
                        </button>
                    </div>
                </div>
            </main>

        </>
    );

}

export default StorePage;
