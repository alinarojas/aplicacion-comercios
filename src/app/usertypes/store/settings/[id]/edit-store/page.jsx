// Página de edición de los detalles del comercio

"use client"

import React, { useEffect, useState } from 'react';

import TextsDisplay from '@/components/displays/TextDisplay';
import PhotosDisplay from '@/components/displays/PhotosDisplay';
import LoadingMessage from '@/components/LoadingMessage';

async function getStoreSettings(storeId) {
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

function EditStoreSettings({ params }) {
    const [storeSettings, setStoreSettings] = useState(null);
    const [newText, setNewText] = useState('');
    const [newPhoto, setNewPhoto] = useState('');
    const [storeId, setStoreId] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getStoreSettings(params.id);
            setStoreSettings(data);
        }
    
        // Obtiene la parte de la URL que contiene el ID
        const urlParts = window.location.pathname.split('/');
        const idIndex = urlParts.indexOf('edit-store') - 1; // El ID está antes de 'edit-store'
    
        if (idIndex >= 0) {
            const id = urlParts[idIndex];
            setStoreId(id);
        }
    
        fetchData();
    }, [params.id]);
    

    const handleInputChange = (e, field) => {
        setStoreSettings({ ...storeSettings, [field]: e.target.value });
    };

    const addText = () => {
        if (newText) {
            const newTextKey = `text${Object.keys(storeSettings.texts).length + 1}`;
            setStoreSettings({
                ...storeSettings,
                texts: { ...storeSettings.texts, [newTextKey]: newText }
            });
            setNewText('');
        }
    };

    const addPhoto = () => {
        if (newPhoto) {
            const newPhotoKey = `photo${Object.keys(storeSettings.photos).length + 1}`;
            setStoreSettings({
                ...storeSettings,
                photos: { ...storeSettings.photos, [newPhotoKey]: newPhoto }
            });
            setNewPhoto('');
        }
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch(`/api/store-settings?id=${params.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(storeSettings),
            });

            if (!res.ok) {
                throw new Error('Error al guardar los cambios');
            }

            // Redirigir
            window.location.href = `/usertypes/store/settings/${storeId}`

        } catch (error) {
            console.error('Error al guardar los cambios:', error);
            alert("Hubo un error al guardar los cambios.");
        }
    };

    if (!storeSettings) {
        return <LoadingMessage/>;
    }

    return (
        <main className="flex flex-col items-center justify-center p-6 bg-gray-100 w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Editar ajustes del comercio</h1>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Campos editables */}
                    {/* Nombre del comercio */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Nombre del comercio</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            type="text"
                            value={storeSettings.businessName}
                            onChange={(e) => handleInputChange(e, 'businessName')}
                        />
                    </div>


                    {/* CIF */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">CIF</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={storeSettings.CIF}
                            onChange={(e) => handleInputChange(e, 'CIF')}
                        />
                    </div>


                    {/* Dirección */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Dirección</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={storeSettings.address}
                            onChange={(e) => handleInputChange(e, 'address')}
                        />
                    </div>


                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            value={storeSettings.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                        />
                    </div>


                    {/* Teléfono de contacto */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Teléfono de contacto</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="tel"
                            value={storeSettings.contactPhone}
                            onChange={(e) => handleInputChange(e, 'contactPhone')}
                        />
                    </div>


                    {/* Ciudad */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Ciudad</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={storeSettings.city}
                            onChange={(e) => handleInputChange(e, 'city')}
                        />
                    </div>


                    {/* Actividad */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Actividad</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={storeSettings.activity}
                            onChange={(e) => handleInputChange(e, 'activity')}
                        />
                    </div>


                    {/* Título */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Título</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={storeSettings.title}
                            onChange={(e) => handleInputChange(e, 'title')}
                        />
                    </div>


                    {/* Resumen */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Resumen</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={storeSettings.summary}
                            onChange={(e) => handleInputChange(e, 'summary')}
                        />
                    </div>


                    {/* Textos */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Textos</label>
                        {/* Mostrar textos existentes */}
                        <TextsDisplay texts={storeSettings.texts} />
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
                            type="text"
                            placeholder="Añadir nuevo texto"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                        <button onClick={addText} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Añadir texto
                        </button>
                    </div>

                    {/* Fotos */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Fotos</label>
                        {/* Mostrar fotos existentes */}
                        <PhotosDisplay photos={storeSettings.photos} />
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
                            type="text"
                            placeholder="Añadir nuevo nombre de foto"
                            value={newPhoto}
                            onChange={(e) => setNewPhoto(e.target.value)}
                        />
                        <button onClick={addPhoto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Añadir foto
                        </button>
                    </div>
                </div>

                {/* Botón Guardar cambios */}
                <div className="flex justify-end mt-6">
                    <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Guardar cambios
                    </button>
                </div>
            </div>
        </main>
    );
}

export default EditStoreSettings;
