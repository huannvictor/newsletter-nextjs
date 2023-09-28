import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request, response: Response) {
  // const { searchParams } = new URL(request.url);
  // const email = searchParams.get('email');
  // const body = await request.json()
  // const email = body.email
 
  // try {
  //   if (!email ) throw new Error('email required')
  //   await sql`INSERT INTO Subscribers (email) VALUES (${email});`
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 })
  // }
 
  const subscribers = await sql`SELECT * FROM Subscribers;`
  return response.json()
}

export async function POST(request: Request) {
  const body = await request.json()
  const email = body.email

  try {
    if (!email ) throw new Error('email required')
    await sql`INSERT INTO Subscribers (email) VALUES (${email});`

    return NextResponse.json({ created: true })
  } catch (error) {
    return NextResponse.json({ created: false, error}, { status: 400 })
  }

}