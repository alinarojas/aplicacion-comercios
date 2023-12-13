import React from 'react';

function TextsDisplay({ texts }) {
    if (!texts) {
        return null;
    }

    return (
        <>
            {Object.entries(texts).map(([key, value]) => (
                <div key={key} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">{key}</label>
                    <p className="text-gray-700">
                        {value}
                    </p>
                </div>
            ))}
        </>
    );
}

export default TextsDisplay;
