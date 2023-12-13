// API para el registro de un comercio desde la interfaz de admin


import { v4 as uuidv4 } from 'uuid';
import { readFileSync, writeFileSync } from 'fs';
import { NextResponse } from 'next/server';

export async function POST(request) {
    
    const data = await request.json();
    const storeId = uuidv4(); // Generar un ID único

    let directorio = "src/txt/stores.txt";
    let newData = { ...data, id: storeId }; // Agregar el ID al objeto del comercio

    try {
        const stores = JSON.parse(readFileSync(directorio));
        
        // Comprobación de si el correo ya está vinculado a una tienda
        let emailLinked = stores.some(store => store.email === store.email);
        if (emailLinked) {
            return NextResponse.json({
                message: "El email ya existe."
            });
        }

        writeFileSync(directorio, JSON.stringify([...stores, newData]));
    } catch (e) {
        writeFileSync(directorio, JSON.stringify([newData]));
    }

    return NextResponse.json({
        message: "Guardando datos…",
        storeId: storeId // devolver el ID en la respuesta
    });
}
