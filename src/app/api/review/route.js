// API para mostrar las reseñas de un comercio según su id


import { readFileSync } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/txt/stores.txt');

export async function GET(request) {
    const url = new URL(request.url);
    const storeId = url.searchParams.get('id');

    try {
        const stores = JSON.parse(readFileSync(filePath, 'utf8'));
        const store = stores.find(store => store.id === storeId);

        if (store && store.reviews) {
            return new Response(JSON.stringify(store.reviews), { status: 200 });
        } else {
            return new Response(JSON.stringify([]), { status: 200 }); // Devuelve un array vacío en lugar de 404
        }
    } catch (e) {
        return new Response(JSON.stringify({ message: "Error al leer el archivo" }), { status: 500 });
    }
}

