// Contenedor con todas las reseñas de un comercio según su id

"use client" 

import React, { useState, useEffect } from 'react';
import ReviewGrid from '@/components/reviews/ReviewGrid';


function ReviewsShowcase({ params }) {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);


    // Llamamos a la función de búsqueda de reseñas mediante el id del comercio
    useEffect(() => {
        fetchReviews(params);
    }, [params]);

    // Recopilar las reseñas en función de un id
    const fetchReviews = async (id) => {
        try {
            const response = await fetch(`/api/review?id=${id}`);
            if (response.ok) {
                const reviewsData = await response.json();
                setReviews(reviewsData);
                setError(null);
            }
        } catch (error) {
            console.error(error.message);
            setError('Error al cargar las reseñas.');
        }
    };


    return (
        <>  
            <section className="py-8">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">Reseñas</h3>
                {error ? (
                    <p>{error}</p>
                ) : (
                    <ReviewGrid reviews={reviews} />
                )}
            </section>

        </>
    );

}

export default ReviewsShowcase;
