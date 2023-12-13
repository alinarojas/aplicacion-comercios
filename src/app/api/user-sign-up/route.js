// API para el registro de un usuario


import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';


export async function POST(request) {
    const data = await request.json();
    let directorio = "src/txt/users.txt";

    try { 
        const users = JSON.parse(readFileSync(directorio, 'utf8'));

        // Comprobación de si el usuario ya existe
        let userExists = users.some(user => user.email === data.email);
        if (userExists) {
            return NextResponse.json({
                message: "El email ya existe."
            });
        }

        userExists = users.some(user => user.user === data.user);
        if (userExists) {
            return NextResponse.json({
                message: "El usuario ya existe."
            });
        }

        // Guardando el nuevo usuario
        writeFileSync(directorio, JSON.stringify([...users, data]));
        return NextResponse.json({
            message: "Guardando datos…"
        });

    } catch (e) { 
        // Si el archivo no existe, crea uno nuevo con el usuario
        writeFileSync(directorio, JSON.stringify([data]));
        return NextResponse.json({
            message: "Guardando datos…"
        });
    }
}
