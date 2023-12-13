// API para usuario registrado

/*
    Gestión de:
    - Edición de datos
    - Obtener datos
    - Borrado de cuenta
*/


// Imports
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';


// Ruta del archivo donde se almacenan los datos de los usuarios
const filePath = path.join(process.cwd(), 'src/txt/users.txt');


// Funciones auxiliares
const getUsers = () => {
    try {
        return JSON.parse(readFileSync(filePath, 'utf8'));
    } catch (e) {
        throw new Error('Error al leer el archivo');
    }
};

const saveUsers = (users) => {
    writeFileSync(filePath, JSON.stringify(users));
};

const findUserIndexById = (users, userId) => users.findIndex(user => user.user === userId);


// Lógica para actualizar los datos de un usuario existente
export async function POST(request) 
{
    const data = await request.json();
    const userId = new URL(request.url).searchParams.get('user');

    try {
        const users = getUsers();
        const userIndex = findUserIndexById(users, userId);

        // Actualizar el usuario existente
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...data };
            saveUsers(users);
            return new Response(JSON.stringify({ message: "OK" }), { status: 200 });
        }

        return new Response(JSON.stringify({ message: "Usuario no encontrado" }), { status: 404 });
    } catch (e) {
        return new Response(JSON.stringify({ message: "NOK" }), { status: 500 });
    }
}


// Lógica para obtener detalles de un usuario específico
export async function GET(request) 
{
    const userId = new URL(request.url).searchParams.get('user');

    try {
        const users = getUsers();

        // Devolver todos los usuarios si no se especifica un user
        if (!userId) {
            return new Response(JSON.stringify(users), { status: 200 });
        }

        // Devolver los detalles de un usuario en concreto por su user
        const user = users.find(user => user.user === userId);
        if (user) {
            return new Response(JSON.stringify(user), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: "Usuario no encontrado" }), { status: 404 });
        }
    } catch (e) {
        return new Response(JSON.stringify({ message: "Error al leer el archivo" }), { status: 500 });
    }
}


// Lógica para eliminar un usuario específico
export async function DELETE(request) 
{
    const userId = new URL(request.url).searchParams.get('user');

    try {
        const users = getUsers();
        const newUsers = users.filter(user => user.user !== userId);

        if (users.length === newUsers.length) {
            return new Response(JSON.stringify({ message: "Usuario no encontrado" }), { status: 404 });
        }

        saveUsers(newUsers);
        return new Response(JSON.stringify({ message: "Usuario eliminado con éxito" }), { status: 200 });
    } catch (e) {
        return new Response(JSON.stringify({ message: "Error al procesar la solicitud" }), { status: 500 });
    }
}
