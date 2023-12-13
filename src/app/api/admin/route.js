// API para el inicio de sesión de admin


import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';


export async function POST(request, { params }) {

    const admins = JSON.parse(readFileSync("src/txt/admin.txt"));
    const { user, pass } = await request.json();

    if (admins.filter((admin) => admin.user == user && admin.pass == pass).length > 0)
        return NextResponse.json({ message: "OK" })
    else
        return NextResponse.json({ message: "NOK" })

}