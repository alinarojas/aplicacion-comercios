"use client";

import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import StoresGrid from "@/components/store-related/StoresGrid";

// Función para realizar la búsqueda en el API.
async function fetchSearchResults(searchParams) {
    const response = await fetch(`/api/search/?${searchParams}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

function CommonBrowse({ searchKey, pageTitle, userType }) {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (key, value) => {
        const searchParams = new URLSearchParams({ [key]: value }).toString();
        await performSearch(searchParams);
    };

    const performSearch = async (searchParams) => {
        try {
            const results = await fetchSearchResults(searchParams);
            setSearchResults(results);

        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    let textoVar = '';

    switch (searchKey) {
        case 'businessName':
            textoVar = 'nombre';
            break;
        case 'city':
            textoVar = 'ciudad';
            break;
        case 'activity':
            textoVar = 'actividad';
            break;

    }

    return (
        <>

            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                {pageTitle}
            </h1>

            {/* Barras de texto */}
            <SearchBar placeholder={`Buscar por ${textoVar}...`} onSearch={(value) => handleSearch(searchKey, value)} />

            {/* Componente StoresGrid para mostrar los resultados */}
            <div className="mt-8">
                <StoresGrid stores={searchResults} userType={userType} />
            </div>

        </>
    );
}

export default CommonBrowse;
