import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  const client = await sql.connect()
  const subscribers = await client.sql`SELECT * FROM Subscribers;`
  client.release()

  try {
    return NextResponse.json({subscribers}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 400})
  }
}