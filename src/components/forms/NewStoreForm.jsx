import React from 'react';

const NewStoreForm = ({ onSubmit, setBusinessName, setCIF, setAddress, setEmail, setContactPhone, setPass }) => {
    return (
        <form onSubmit={onSubmit} className="max-w-sm mx-auto p-4">
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registro de nuevo comercio</h2>

            <p className="mb-6 text-center from-stone-600">Datos de la empresa:</p>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Nombre del comercio"
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="CIF"
                    onChange={(e) => setCIF(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Dirección"
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                />
            </div>
            <div className="mb-6">
                <input
                    type="tel"
                    placeholder="Teléfono de contacto"
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                />
            </div>

            <p className="mb-6 text-center from-stone-600">Datos de la cuenta:</p>
            <div className="mb-4">
                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPass(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
                />
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:bg-blue-700">Registrarse</button>
    
        </form>
    );
};

export default NewStoreForm;
