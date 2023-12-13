"use client"

import React, { useState, useEffect } from 'react';
import AddContentStoreForm from '@/components/forms/AddContentStoreForm';

function AddContentToStorePage() {
    const [city, setCity] = useState('');
    const [activity, setActivity] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [text1, setText1] = useState(''); 
    const [photo1, setPhoto1] = useState(''); 
    const [message, setMessage] = useState('');
    const [storeId, setStoreId] = useState(null);

    useEffect(() => {
        const urlParts = window.location.pathname.split('/');
        const idIndex = urlParts.indexOf('almost-completed') - 1;
        if (idIndex >= 0) {
            const id = urlParts[idIndex];
            setStoreId(id);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!storeId) return;

        const contentToAdd = {
            city,
            activity,
            title,
            summary,
            texts: { text1 }, 
            photos: { photo1 }, 
            scoring: "",
            num_reviews: 0,
            reviews: "",
            completed: true
        };

        try {
            const result = await fetch(`/api/store-settings?id=${storeId}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contentToAdd),
            });

            const data = await result.json();

            if (data.message === 'OK') {
                setMessage('Contenido agregado con éxito.');
                window.location.href = `/usertypes/store/settings/${storeId}`;
            } else {
                setMessage('Error al agregar contenido.');
            }
        } catch (err) {
            console.error(err);
            setMessage('ERROR al agregar contenido. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6">
            {message && <p>{message}</p>}
            <AddContentStoreForm
                onSubmit={handleSubmit}
                setCity={setCity}
                setActivity={setActivity}
                setTitle={setTitle}
                setSummary={setSummary}
                setText1={setText1} 
                setPhoto1={setPhoto1} 
            />
        </main>
    );
}

export default AddContentToStorePage;
