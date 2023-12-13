import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";

// Función para realizar la búsqueda en el API.
async function fetchSearchResults(searchParams) {
    const response = await fetch(`/api/search-user/?${searchParams}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return await response.json();
}

function UserBrowse({ searchKey, cityStore }) {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (key, value) => {
        const searchParams = new URLSearchParams({
            [key]: value,
            cityStore: cityStore
        }).toString();
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

    return (
        <>
            {/* Barras de texto */}
            <SearchBar
                placeholder={`Buscar por intereses...`}
                onSearch={(value) => handleSearch(searchKey, value)}
            />

            {/* Mostrar los resultados */}
            <div className="mt-8">
                <ul>
                    {searchResults.map((user) => (
                        <li key={user.email}>{user.email} - {user.interests}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default UserBrowse;
