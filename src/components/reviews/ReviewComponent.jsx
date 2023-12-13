import React from 'react';

function ReviewComponent({ review }) {
    return (
        <div className="review-item mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold">{review.author}</h4>
            <p className="text-sm text-gray-600">{new Date(review.fecha).toLocaleDateString()}</p>
            <div className="text-sm text-gray-800 mt-2">
                <strong>Título:</strong> {review.title}
            </div>
            <p className="text-sm text-gray-800 mt-1">{review.text}</p>
            <div className="text-sm text-gray-800 mt-2">
                <strong>Nota:</strong> {review.rating}/5
            </div>
        </div>
    );
}

export default ReviewComponent;
