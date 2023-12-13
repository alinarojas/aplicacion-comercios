import React from 'react';
import ReviewComponent from './ReviewComponent'; // Asegúrate de que la ruta de importación sea correcta

function ReviewGrid({ reviews }) {
    // Ordenar las revisiones de más reciente a más antiguo
    const sortedReviews = reviews.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedReviews && sortedReviews.length > 0 ? (
                sortedReviews.map((review, index) => (
                    <ReviewComponent key={index} review={review} />
                ))
            ) : (
                <p className="col-span-full text-center text-gray-800">No hay reseñas disponibles.</p>
            )}
        </div>
    );
}

export default ReviewGrid;
