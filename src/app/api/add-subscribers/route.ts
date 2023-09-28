import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json()
  const email = body.email

  try {
    if (!email ) throw new Error('email required')
    
    const client = await sql.connect()
    await client.sql`INSERT INTO Subscribers (email) VALUES (${email});`
    client.release()

    return NextResponse.json({ created: true })
  } catch (error) {
    return NextResponse.json({ created: false, error}, { status: 400 })
  }

}