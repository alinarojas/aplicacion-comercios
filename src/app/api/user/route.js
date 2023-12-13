// API para inicio de sesión de un usuario registrado


import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";



// Ruta del archivo donde se almacenan los datos de los comercios
const users = JSON.parse(readFileSync("src/txt/users.txt"));


// Lógica de inicio de sesión
export async function POST(request, { params }) {
    const { user, password } = await request.json();

    if (users.filter((u) => u.user == user && u.password == password).length > 0)
        return NextResponse.json({ message: "OK" })
    else
        return NextResponse.json({ message: "NOK" })
}