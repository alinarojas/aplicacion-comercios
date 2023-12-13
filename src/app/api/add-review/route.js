// API para la adición de una reseña por parte de un usuario registrado


import { readFileSync, writeFileSync } from 'fs';
import path from 'path';


// Ruta del archivo donde se almacenan los datos de los comercios
const filePath = path.join(process.cwd(), '/src/txt/stores.txt');


export async function POST(request) {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    try {
        const stores = JSON.parse(readFileSync(filePath, 'utf8'));
        const storeIndex = stores.findIndex(store => store.id === id); // id de la URL

        if (storeIndex !== -1) {
            const { review } = await request.json(); // Obtener la reseña del cuerpo de la solicitud
            const newReview = {
                ...review,
                fecha: new Date().toISOString()
            };

            if (!stores[storeIndex].reviews) {
                stores[storeIndex].reviews = [];
            }

            // Guardar nueva reseña
            stores[storeIndex].reviews.push(newReview);

            // Incrementar el número de reseñas del comercio
            stores[storeIndex].num_reviews += 1;

            // Calcular la nueva puntuación media
            const totalRating = stores[storeIndex].reviews.reduce((acc, curr) => acc + parseInt(curr.rating), 0);
            const averageRating = (totalRating / stores[storeIndex].reviews.length).toFixed(1);
            stores[storeIndex].scoring = averageRating;

            writeFileSync(filePath, JSON.stringify(stores));
            

            return new Response(JSON.stringify(newReview), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: "Comercio no encontrado" }), { status: 404 });
        }
    } catch (e) {
        return new Response(JSON.stringify({ message: "Error interno del servidor" }), { status: 500 });
    }
}
