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

export async function DELETE(request: Request) {
  const body = await request.json()
  const id = JSON.stringify(body.id)

  try {
    const connection = await mysql.createConnection("mysql://nextjs:nextjs@localhost:3306/newsletter")
    await connection.query("DELETE FROM Subscribers WHERE id = ?", id)
    connection.end()
    return NextResponse.json({ deleted: true })
  } catch (error) {
    return NextResponse.json({ deleted: false, error}, { status: 400 })
  }
}

