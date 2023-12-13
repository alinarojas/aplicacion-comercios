
import React, { useState, useEffect } from 'react';

const AddReviewForm = ({ onSubmit }) => {
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <form onSubmit={(e) => onSubmit(e, { author, rating, title, text })} className="max-w-sm mx-auto p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Autor"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Nota"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                    min="0"
                    max="5"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                    required
                />
            </div>
            <div className="mb-4">
                <textarea
                    placeholder="Texto de la reseña"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:bg-blue-700"
            >
                Añadir reseña
            </button>
        </form>
    );
};

export default AddReviewForm;
