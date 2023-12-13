// Página para editar los datos de la cuenta de usuario

"use client"

// Imports
import React, { useEffect } from 'react';

// Componentes
import UserEditSettingsForm from '@/components/forms/UserEditSettingsForm';
import LoadingMessage from '@/components/LoadingMessage';


function UserEditSettingsPage({ params }) {
    const [userSettings, setUserSettings] = React.useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getUserSettings(params.username);
            setUserSettings(data);
        }
        fetchData();
    }, [params.username]);

    // Manejador para los cambios en los campos
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setUserSettings(prevSettings => ({
            ...prevSettings,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    // Obtener los datos del usuario
    async function getUserSettings(user) {
        try {
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

    // Guardar los ajustes del usuario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userSettings) return;

        try {
            const res = await fetch(`/api/user-settings?user=${userSettings.user}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: userSettings.user,
                    city: userSettings.city,
                    interests: userSettings.interests,
                    allowsOffers: userSettings.allowsOffers,
                }),
            });

            if (!res.ok) {
                throw new Error('Error al guardar los ajustes');
            }

            window.location.href = `/usertypes/user/settings/${userSettings.user}`

        } catch (error) {
            console.error('Error al guardar los ajustes:', error);
            alert("Hubo un error al guardar los ajustes.");
        }
    }

    return (

        <main className="flex min-h-screen flex-col items-center justify-center p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Modificar datos de la cuenta</h1>

            {userSettings ? (
                <UserEditSettingsForm
                    userSettings={userSettings}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            ) : (
                <LoadingMessage/>
            )}

        </main>
    );


}

export default UserEditSettingsPage;
