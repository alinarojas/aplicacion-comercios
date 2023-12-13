// Página de registro de comercios

"use client"

/* Imports */
import React, { useState } from 'react';
import NewStoreForm from '@/components/forms/NewStoreForm';

function StoreSignUpPage() {

    const [businessName, setBusinessName] = useState('');
    const [CIF, setCIF] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [error, setError] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    // Mecánica de registro de comercio
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Realiza la validación de campos
        if (!businessName || !CIF || !address || !email || !pass || !contactPhone) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        try {
            const result = await fetch("/api/store-sign-up", {
                method: "POST",
                body: JSON.stringify({ businessName, CIF, address, email, pass, contactPhone }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await result.json();

            if (data.message === "El email ya existe.") {
                setError("El email ya está vinculado con otra cuenta.");
                return;
            }

            if (data.message === 'Guardando datos…') {
                // Redirige al usuario
                window.location.href = `/usertypes/store/settings/${data.storeId}/almost-completed`
            } else {
                setRegisterMessage('Registro fallido.');
            }
        } catch (err) {
            setError('Error al registrarse. Por favor, inténtalo de nuevo.');
        }
    };


    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-6">

                {error && <p className="error text-red-600 text-center">{error}</p>}
                {registerMessage && <p className='text-red-600 text-center'>{registerMessage}</p>}

                <NewStoreForm
                    onSubmit={handleSubmit}
                    setBusinessName={setBusinessName}
                    setCIF={setCIF}
                    setAddress={setAddress}
                    setEmail={setEmail}
                    setPass={setPass}
                    setContactPhone={setContactPhone}
                    error={error}
                />
            </main>

        </>
    );
}

export default StoreSignUpPage;
