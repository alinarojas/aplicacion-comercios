import React from 'react';

function PhotosDisplay({ photos }) {
    if (!photos) {
        return null;
    }

    return (
        <>
            {Object.entries(photos).map(([key, value]) => (
                <div key={key} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">{key}</label>
                    {
                        value
                        ? <p className="text-gray-600">{value}</p>
                        : <p className="text-gray-600">No se subió ninguna primera foto.</p>
                    }
                </div>
            ))}
        </>
    );
}

export default PhotosDisplay;
