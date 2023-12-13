// API para comercio

/*
    Gestión de:
    - Edición de datos
    - Obtener datos
    - Borrado de cuenta

*/

// Imports
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';


// Ruta del archivo donde se almacenan los datos de los comercios
const filePath = path.join(process.cwd(), 'src/txt/stores.txt');


// Funciones auxiliares
const getStores = () => {
    try {
        return JSON.parse(readFileSync(filePath, 'utf8'));
    } catch (e) {
        throw new Error('Error al leer el archivo');
    }
};

const saveStores = (stores) => {
    writeFileSync(filePath, JSON.stringify(stores));
};

const findStoreIndexById = (stores, id) => stores.findIndex(store => store.id === id);



// Lógica para actualizar los datos de un comercio existente
export async function POST(request)
{
    const data = await request.json();
    const storeId = new URL(request.url).searchParams.get('id');

    try {
        const stores = getStores();
        const storeIndex = findStoreIndexById(stores, storeId);

        // Actualizar el comercio existente
        if (storeIndex !== -1) {
            stores[storeIndex] = { ...stores[storeIndex], ...data };
            saveStores(stores);
            return new Response(JSON.stringify({ message: "OK" }), { status: 200 });
        }

        return new Response(JSON.stringify({ message: "Comercio no encontrado" }), { status: 404 });
    } catch (e) {
        return new Response(JSON.stringify({ message: "NOK" }), { status: 500 });
    }
}


// Lógica para obtener detalles de un comercio específico
export async function GET(request)
{
    const storeId = new URL(request.url).searchParams.get('id');

    try {
        const stores = getStores();

        // Devolver todos los comercios si no se especifica un id
        if (!storeId) {
            return new Response(JSON.stringify(stores), { status: 200 });
        }

        // Devolver los detalles de un comercio en concreto por su id
        const store = stores.find(store => store.id === storeId);
        if (store) {
            return new Response(JSON.stringify(store), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: "Comercio no encontrado" }), { status: 404 });
        }
    } catch (e) {
        return new Response(JSON.stringify({ message: "Error al leer el archivo" }), { status: 500 });
    }
}


// Lógica para eliminar un comercio específico
export async function DELETE(request)
{
    const storeId = new URL(request.url).searchParams.get('id');

    try {
        const stores = getStores();
        const newStores = stores.filter(store => store.id !== storeId);

        if (stores.length === newStores.length) {
            return new Response(JSON.stringify({ message: "Comercio no encontrado" }), { status: 404 });
        }

        saveStores(newStores);
        return new Response(JSON.stringify({ message: "Comercio eliminado con éxito" }), { status: 200 });
    } catch (e) {
        return new Response(JSON.stringify({ message: "Error al procesar la solicitud" }), { status: 500 });
    }
}