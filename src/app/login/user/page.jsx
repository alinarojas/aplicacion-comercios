// Página de login para usuarios registrados

"use client"

/* Imports */
import React, { useState } from 'react';
import LoginForm from "@/components/forms/LoginForm";
import Link from 'next/link';
import NavBar from '@/components/navbars/NavBar';

function UserLoginPage() {
    const [user, setUser] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await fetch("/api/user", {
                method: "POST",
                body: JSON.stringify({ user, password }),
                headers: {
                    "Content-type": "application/json"
                }
            });

            const data = await result.json();

            if (data.message === 'OK') {
                setLoginSuccess(true);
                setLoginMessage('Inicio de sesión exitoso.');

                window.location.href = `/usertypes/user/settings/${user}`

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
                    <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Usuario</h2>

                    {loginMessage && (
                        <p className={loginSuccess ? 'text-green-600 text-center' : 'text-red-600 text-center'}>
                            {loginMessage}
                        </p>
                    )}

                    <LoginForm
                        onSubmit={handleSubmit}
                        setUser={setUser}
                        setPass={setPass}
                        error={error}
                    />
                    <Link href="/sign-up" className="block text-center text-gray-600 hover:text-black mt-4">¿No tienes cuenta? Regístrate</Link>
                </div>
            </main>
        </>
    );
}

export default UserLoginPage;
