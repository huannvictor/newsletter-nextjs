import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
  const body = await request.json()
  const id = body.id

  try {
    if (!id ) throw new Error('id is required')

    const client = await sql.connect()
    await client.sql`DELETE FROM Subscribers WHERE id = ${id};`
    client.release()

    return NextResponse.json({ deleted: true })
  } catch (error) {
    return NextResponse.json({ deleted: false, error}, { status: 400 })
  }

}