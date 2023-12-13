// Página para añadir reseñas de parte de un usuario registrado

"use client"

// Imports
import React, { useState, useEffect } from 'react';

// Componentes
import AddReviewForm from '@/components/forms/AddReviewForm';


function AddUserReviewPage() {
    const [storeId, setStoreId] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {

        // Obtiene la parte de la URL que contiene el ID
        const urlParts = window.location.pathname.split('/');
        const idIndex = urlParts.indexOf('add-review') - 1; // El ID está antes de 'add-review'

        if (idIndex >= 0) {
            const id = urlParts[idIndex];
            setStoreId(id);
        }
    }, []);

    const addReview = async (event, review) => {
        event.preventDefault();
        if (!storeId || !review) return;

        try {
            const response = await fetch(`/api/add-review?id=${storeId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    review, // Envía la reseña directamente
                }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar la reseña.');
            }

            const newReview = await response.json();
            setReviews([...reviews, newReview]);
            setSuccessMessage('Reseña guardada correctamente.'); // Mensaje de éxito
            setErrorMessage(''); // Reinicia el mensaje de error
            // Redirige
            window.location.href = `/usertypes/user/store/${storeId}`
        } catch (error) {
            console.error(error.message);
            setErrorMessage('Error al guardar la reseña.'); // Mensaje de error
            setSuccessMessage(''); // Reinicia el mensaje de éxito
        }
    };

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-6">

                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Añadir una reseña
                </h1>

                <section className="py-8">

                    {successMessage && <div className="text-green-600 text-center">{successMessage}</div>}
                    {errorMessage && <div className="text-red-600 text-center">{errorMessage}</div>}

                    <AddReviewForm onSubmit={addReview} />

                </section>

            </main>
        </>
    );
}

export default AddUserReviewPage;
