import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  const subscribers = await sql`SELECT * FROM Subscribers;`

  try {
    return NextResponse.json({subscribers}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 400})
  }
}