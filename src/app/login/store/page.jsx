// Página de login para los comercios registrados por admin

"use client"

/* Imports */
import React, { useState } from 'react';
import StoreLoginForm from '@/components/forms/StoreLoginForm';
import NavBar from '@/components/navbars/NavBar';

function StoreLoginPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [loginMessage, setLoginMessage] = useState(''); // Estado para manejar el mensaje de inicio de sesión
    const [loginSuccess, setLoginSuccess] = useState(false);

    // Mecánica de comprobación del cliente del inicio de sesión
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await fetch("/api/store", {
                method: "POST",
                body: JSON.stringify({ email, pass }),
                headers: {
                    "Content-type": "application/json"
                }
            });

            const data = await result.json();

            if (data.message === 'OK') {
                setLoginSuccess(true);
                setLoginMessage('Inicio de sesión exitoso.');

                // Redirige al usuario
                window.location.href = `/usertypes/store/settings/${data.id}`
            } else {
                setLoginSuccess(false);
                setLoginMessage('Inicio de sesión fallido. :(');
            }

        } catch (err) {
            setError('ERROR al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <>
            <NavBar />

            <main className="flex min-h-screen flex-col items-center justify-center p-6">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">

                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Inicio de sesión</h2>
                    <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Comercio</h2>

                    {loginMessage && (
                        <p className={loginSuccess ? 'text-green-600 text-center' : 'text-red-600 text-center'}>
                            {loginMessage}
                        </p>
                    )} {/* Muestra el mensaje de inicio de sesión */}

                    <StoreLoginForm
                        onSubmit={handleSubmit}
                        setEmail={setEmail}
                        setPass={setPass}
                        error={error}
                    />
                </div>
            </main>

        </>
    );
}

export default StoreLoginPage;
