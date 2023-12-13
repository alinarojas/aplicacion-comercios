import React from 'react';

const AddContentStoreForm = ({
  onSubmit,
  setCity,
  setActivity,
  setTitle,
  setSummary,
  setText1, 
  setPhoto1, 
}) => {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Completar registro del comercio
      </h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Ciudad"
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 text-gray-800"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Actividad"
          onChange={(e) => setActivity(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 text-gray-800"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 text-gray-800"
        />
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Resumen"
          onChange={(e) => setSummary(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 text-gray-800"
        />
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Texto"
          onChange={(e) => setText1(e.target.value)} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 text-gray-800"
        />
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Foto (nombre de fichero)" 
          onChange={(e) => setPhoto1(e.target.value)} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 text-gray-800"
        />
      </div>

      <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:bg-blue-600">
        Publicar comercio
      </button>
    </form>
  );
};

export default AddContentStoreForm;
