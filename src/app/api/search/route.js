// API para la búsqueda de comercios según un campo dado
/*
  - businessName
  - city
  - activity
*/


import { readFileSync } from 'fs';


// Lee el archivo de datos.
const storesData = JSON.parse(readFileSync("src/txt/stores.txt"));

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;

  // Obtiene los valores de los parámetros si existen.
  const businessName = searchParams.get('businessName');
  const city = searchParams.get('city');
  const activity = searchParams.get('activity');

  // Filtra los resultados basados en los parámetros proporcionados.
  const filteredStores = storesData.filter((store) => {
    return (!businessName || store.businessName.toLowerCase().includes(businessName.toLowerCase())) &&
      (!city || store.city.toLowerCase().includes(city.toLowerCase())) &&
      (!activity || store.activity.toLowerCase().includes(activity.toLowerCase()));
  });

  // Devuelve la respuesta filtrada.
  return new Response(JSON.stringify(filteredStores), { status: 200 });
}
