"use server"

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

type ErrorProps = any & {
  detail: string
  [key: string]: any
}

export const addSubscription = async (formData: FormData) => {
  const email = formData.get("email")
    
  try {
    const client = await sql.connect()
    await client.sql`INSERT INTO Subscribers (email) VALUES (${email as string});`
    client.release()
        
    return '✅ email cadastrado com sucesso!'
  } catch (err: ErrorProps) {
    if (err !== undefined && err !== typeof Object) {
      const error = `❌ - ${err.detail}`
      return error
    }
  }
}

export const listSubscriptions = async () => {
  try {
    const client = await sql.connect()
    const subscribers = await client.sql`SELECT * FROM Subscribers;`
  
    revalidatePath('/admin/subscribers')
  
    return subscribers.rows
  } catch (error) {
    return
  }
}

export const deleteSubscription = async (id: number) => {
  try {
    const subscriptionId = String(id)

    const client = await sql.connect()
    await client.sql`DELETE FROM Subscribers WHERE id = ${subscriptionId};`
    client.release()

    revalidatePath('/admin/subscribers')
    
    return '✅ email deletado com sucesso!'    
  } catch (err: ErrorProps) {
    if (err !== undefined && err !== typeof Object) {
      const error = `❌ - ${err.detail}`
      return error
    }
  }
}