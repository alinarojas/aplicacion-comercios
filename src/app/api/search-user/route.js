import { readFileSync } from 'fs';

// Lee el archivo de datos.
const usersData = JSON.parse(readFileSync("src/txt/users.txt"));

export async function GET(request) {
    const searchParams = new URL(request.url).searchParams;

    // Obtiene los valores de los parámetros si existen.
    const interests = searchParams.get('interests');
    const cityStore = searchParams.get('cityStore'); 

    // Filtra los resultados basados en los parámetros proporcionados.
    const filteredUsers = usersData.filter((user) => {
        const userCity = user.city ? user.city.toLowerCase() : null;
        const isCityMatch = userCity === cityStore.toLowerCase();
        const isInterestsMatch = !interests || user.interests.toLowerCase().includes(interests.toLowerCase());

        return isCityMatch && user.allowsOffers === true && isInterestsMatch;
    });

    // Obtiene los datos necesarios de los usuarios encontrados.
    const usersInfo = filteredUsers.map((user) => {
        return {
            email: user.email,
            interests: user.interests
        };
    });

    // Devuelve los datos de los usuarios interesados.
    return new Response(JSON.stringify(usersInfo), { status: 200 });
}
