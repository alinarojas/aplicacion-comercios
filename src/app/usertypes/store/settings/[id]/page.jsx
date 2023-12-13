// Página con los detalles del comercio

"use client"

import React, { useEffect } from 'react';

import TextsDisplay from '@/components/displays/TextDisplay';
import PhotosDisplay from '@/components/displays/PhotosDisplay';
import UserBrowse from '@/components/browse-related/UserBrowse';
import LoadingMessage from '@/components/LoadingMessage';

async function getstoreSettings(storeId) {
    try {
        const res = await fetch(`/api/store-settings?id=${storeId}`);

        if (!res.ok) {
            console.error('Error en la respuesta de la API:', res.statusText);
            return null;
        }

        const settings = await res.json();
        return settings;

    } catch (error) {
        console.error('Error al realizar la solicitud a la API:', error);
        return null;
    }
}

async function deleteAccount(storeId) {
    if (window.confirm("¿Estás seguro de que quieres eliminar esta cuenta?")) {
        try {
            const res = await fetch(`/api/store-settings?id=${storeId}`, {
                method: 'DELETE',
            });

            if (!res.ok) {
                throw new Error('Error al eliminar la cuenta');
            }

            alert("Cuenta eliminada exitosamente.");
            window.location.href = '/'

        } catch (error) {
            console.error('Error al eliminar la cuenta:', error);
            alert("Hubo un error al eliminar la cuenta.");
        }
    }
}

function StoreSettingsPage({ params }) {
    const [storeSettings, setStoreSettings] = React.useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getstoreSettings(params.id);
            setStoreSettings(data);
        }
        fetchData();
    }, [params.id]);

    return (
        <main className="flex flex-col items-center justify-center p-6 bg-gray-100 w-full">

            <h1 className="text-3xl font-bold text-gray-800 mb-8">Ajustes del comercio</h1>

            {storeSettings ? (
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Nombre del comercio */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Nombre del comercio</label>
                            <input
                                className="input-field"
                                type="text"
                                value={storeSettings.businessName}
                                readOnly
                            />
                        </div>

                        {/* CIF */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">CIF</label>
                            <input
                                className="input-field"
                                type="text"
                                value={storeSettings.CIF}
                                readOnly
                            />
                        </div>

                        {/* Dirección */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Dirección</label>
                            <input
                                className="input-field"
                                type="text"
                                value={storeSettings.address}
                                readOnly
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                className="input-field"
                                type="email"
                                value={storeSettings.email}
                                readOnly
                            />
                        </div>

                        {/* Teléfono de contacto */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Teléfono de contacto</label>
                            <input
                                className="input-field"
                                type="tel"
                                value={storeSettings.contactPhone}
                                readOnly
                            />
                        </div>

                        {/* Ciudad */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Ciudad</label>
                            <input
                                className="input-field"
                                type="text"
                                value={storeSettings.city}
                                readOnly
                            />
                        </div>

                        {/* Actividad */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Actividad</label>
                            <input
                                className="input-field"
                                type="text"
                                value={storeSettings.activity}
                                readOnly
                            />
                        </div>

                        {/* Título */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Título</label>
                            <input
                                className="input-field"
                                type="text"
                                value={storeSettings.title}
                                readOnly
                            />
                        </div>

                        {/* Resumen */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Resumen</label>
                            <input
                                className="input-field"
                                type="text"
                                value={storeSettings.summary}
                                readOnly
                            />
                        </div>

                        {/* Textos */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Textos</label>
                            <TextsDisplay texts={storeSettings.texts} />
                        </div>

                        {/* Fotos (nombre del fichero) */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Fotos</label>
                            <PhotosDisplay photos={storeSettings.photos} />
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex justify-end mt-6">
                        <a href={`/usertypes/store/settings/${storeSettings.id}/edit-store`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                            Editar datos
                        </a>
                        <a onClick={() => deleteAccount(storeSettings.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Eliminar cuenta
                        </a>
                    </div>
                </div>
            ) : (
                <LoadingMessage/>
            )}

            <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-10">Enviar newsletter</h1>

            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">

                <h1 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Consultar intereses de los usuarios</h1>
                {
                    storeSettings
                    ? <UserBrowse searchKey="interests" cityStore={storeSettings.city} />
                    : <LoadingMessage/>
                }
                
            </div>

        </main>
    );


}

export default StoreSettingsPage;
