"use client";


import React, { useState } from "react";


function SearchBar({ placeholder, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch && searchTerm) {
            onSearch(searchTerm);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 p-2 rounded-lg shadow">
            <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow bg-transparent border-none p-2 text-gray-700 focus:outline-none"
            />
            <button type="submit" className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-800">
                Buscar
            </button>
        </form>
    );
}

export default SearchBar;
