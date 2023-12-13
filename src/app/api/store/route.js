// API para el inicio de sesión de un comercio


import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";


export async function POST(request, { params }) {
    const stores = JSON.parse(readFileSync("src/txt/stores.txt"));
    const { email, pass } = await request.json();

    const store = stores.find((u) => u.email == email && u.pass == pass);
    if (store) {
        return NextResponse.json({ message: "OK", id: store.id }); // Devolver OK y id
    } else {
        return NextResponse.json({ message: "NOK" });
    }
}
