// Página en la que se muestran los datos proporcionados sobre el comercio
// antes de su publicación

"use client"

import LoadingMessage from '@/components/LoadingMessage';
import React, { useState, useEffect } from 'react';

async function getStoreId(storeId) {
    try {
        const res = await fetch(`/api/store-settings?id=${storeId}`);

        if (!res.ok) {
            console.error('Error en la respuesta de la API:', res.statusText);
            return null;
        }

        const store = await res.json();
        return store; // Devuelve el comercio directamente

    } catch (error) {
        console.error('Error al realizar la solicitud a la API:', error);
        return null;
    }
}



function CompleteStoreDetailsPage({ params }) {
    const [storeDetails, setStoreDetails] = useState(null);

    useEffect(() => {
        async function fetchStoreDetails() {
            const storeData = await getStoreId(params.id);
            setStoreDetails(storeData);
        }

        fetchStoreDetails();
    }, [params.id]);

    if (!storeDetails) {
        return <LoadingMessage/>;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Datos del comercio</h2>

            <div className="w-full max-w-md mx-auto p-4">
                <div className="mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nombre del comercio</label>
                        <input
                            className="input-field"
                            type="text"
                            value={storeDetails.businessName}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">CIF</label>
                        <input
                            className="input-field"
                            type="text"
                            value={storeDetails.CIF}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Dirección</label>
                        <input
                            className="input-field"
                            type="text"
                            value={storeDetails.address}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <p className="mb-1">Datos de contacto</p>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                className="input-field"
                                type="email"
                                value={storeDetails.email}
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
                            <input
                                className="input-field"
                                type="tel"
                                value={storeDetails.contactPhone}
                                readOnly
                            />
                        </div>
                    </div>
                </div>

                <a href={`/usertypes/store/settings/${storeDetails.id}/almost-completed/add-content`} className="bg-black text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors block w-full text-center">
                    Completar datos
                </a>
            </div>
        </main>
    );
}

export default CompleteStoreDetailsPage;