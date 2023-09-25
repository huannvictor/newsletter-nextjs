import mysql from 'mysql2/promise';
import { NextApiRequest } from "next";
import { NextResponse } from 'next/server';

export async function POST(request: NextApiRequest) {
  const body = await JSON.parse(request.body)

  try {
    const connection = await mysql.createConnection("mysql://nextjs:nextjs@localhost:3306/newsletter")
    await connection.query("INSERT INTO Subscribers (email) VALUES (?)", [body.email])
    connection.end()
    return NextResponse.json({ created: true })
  } catch (error) {
    return NextResponse.json({ created: false, error: error})
  }
}