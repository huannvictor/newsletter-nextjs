import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const connection = await mysql.createConnection("mysql://nextjs:nextjs@localhost:3306/newsletter")
    await connection.query("INSERT INTO Subscribers (email) VALUES (?)", [body.email])
    connection.end()
    return NextResponse.json({ created: true })
  } catch (error) {
    return NextResponse.json({ created: false, error}, { status: 400 })
  }
}