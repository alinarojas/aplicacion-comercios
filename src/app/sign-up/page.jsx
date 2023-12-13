// Página de registro para usuarios

"use client"

/* Imports */
import React, { useState } from 'react';
import RegisterForm from "@/components/forms/RegisterForm";
import NavBar from '@/components/navbars/NavBar';

function UserSignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [interests, setInterests] = useState('');
    const [allowsOffers, setAllowsOffers] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    // Mecánica de registro de usuario
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validación de campos vacíos
        if (!user || !email || !password || !confirmPassword || !age || !city || !interests) {
            setError('Todos los campos son obligatorios.');
            return;
        }
    
        // Validación de edad
        if (parseInt(age) < 14) {
            setError('Debes ser mayor de 14 años para registrarte.');
            return;
        }
    
        // Validación básica de la contraseña
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }
    
        try {
            const result = await fetch("/api/user-sign-up", {
                method: "POST",
                body: JSON.stringify({ email, password, user, age, city, interests, allowsOffers }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const data = await result.json();

            if (data.message === "El email ya existe.") {
                setError("El usuario con este email ya existe.");
                return;
            }

            if (data.message === "El usuario ya existe.") {
                setError("El usuario introducido ya existe.");
                return;
            }    
    
            if (data.message === 'Guardando datos…') {
    
                // Redirige al usuario
                window.location.href = `/usertypes/user/settings/${user}`
            } else {
                setRegisterMessage('Registro fallido.');
            }
    
        } catch (err) {
            setError('Error al registrarse. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-center p-6">

                {error && <p className="error text-red-600 text-center">{error}</p>}
                {registerMessage && <p className='text-red-600 text-center'>{registerMessage}</p>}

                <RegisterForm
                    onSubmit={handleSubmit}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setName={setName}
                    setAge={setAge}
                    setCity={setCity}
                    setInterests={setInterests}
                    setAllowsOffers={setAllowsOffers}
                    setConfirmPassword={setConfirmPassword}
                    error={error}
                />

            </main>
        </>
    );
}

export default UserSignUpPage;
