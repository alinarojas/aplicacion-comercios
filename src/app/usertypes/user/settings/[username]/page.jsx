// Página con los datos del usuario

/*
    Opciones disponibles:
    - Redirigir a la edición de datos de la cuenta
    - Borrado de la cuenta
*/

"use client"

import LoadingMessage from '@/components/LoadingMessage';
import React, { useEffect } from 'react';

async function getUserSettings(user) {
    try {
        // Sería más correcto usar /api/user-settings/${user}, pero habría que crear un directorio nuevo en la api ./[user]
        const res = await fetch(`/api/user-settings?user=${user}`);

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

async function deleteAccount(user) {
    if (window.confirm("¿Estás seguro de que quieres eliminar esta cuenta?")) {
        try {
            const res = await fetch(`/api/user-settings?user=${user}`, {
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

function UserSettingsPage({ params }) {
    const [userSettings, setUserSettings] = React.useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getUserSettings(params.username);
            setUserSettings(data);
        }
        fetchData();
    }, [params.username]);

    return (
        <main className="flex max-h-screen flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Ajustes del usuario</h1>
            {userSettings ? (
                <div className="bg-white px-8 pt-6 pb-8 mb-4 w-full md:max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nombre de usuario</label>
                        <input
                            className="input-field"
                            type="text"
                            value={userSettings.user}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Edad</label>
                        <input
                            className="input-field"
                            type="text"
                            value={userSettings.age}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            className="input-field"
                            type="email"
                            value={userSettings.email}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Ciudad</label>
                        <input
                            className="input-field"
                            type="text"
                            value={userSettings.city}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Intereses</label>
                        <input
                            className="input-field"
                            type="text"
                            value={userSettings.interests}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Permitir recibir ofertas</label>
                        <input
                            type="checkbox"
                            checked={userSettings.allowsOffers}
                            readOnly
                            disabled
                        />
                    </div>
                    {/* Botones de acción */}
                    <div className="flex justify-between">
                        <a href={`/usertypes/user/settings/${userSettings.user}/edit-account`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Editar datos
                        </a>
                        <a onClick={() => deleteAccount(userSettings.user)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Eliminar cuenta
                        </a>
                    </div>
                </div>
            ) : (
                <LoadingMessage/>
            )}
        </main>
    );


}

export default UserSettingsPage;
