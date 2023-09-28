'use client'

import { createClient } from "@vercel/postgres"

interface SubscriberProps {
  id: number
  email: string
  created_at: Date
  updated_at: Date
}


export default function Subscribers() {
  
  async function fetchSubscriptions() {

    const connectionString = `Host=${process.env.POSTGRES_HOST};Port=${5432};Database=${process.env.POSTGRES_DATABASE};User=${process.env.POSTGRES_USER};Password=${process.env.POSTGRES_PASSWORD};`
    const client = createClient({connectionString})

    const { rows } = await client.sql`SELECT * FROM Subscribers;`
    return rows
  }

  const rows = fetchSubscriptions()
  

  return  (
    <main>
      <h1 className="text-2xl font-bold mb-8">Lista de inscritos</h1>
      <table className="w-full text-center">
        <thead className="border-b-[1px]">
          <tr className="[&>*]:py-4">
            <th>ID</th>
            <th>Email</th>
            <th>Created At</th>
            <td>Ação</td>
          </tr>
        </thead>
        <tbody>
        {/* {rows.map(subscriber => (
          <tr key={subscriber.id} className="[&>*]:p-4">
              <td>{subscriber.id}</td>
              <td className="text-left">{subscriber.email}</td>
              <td>{subscriber.created_at.toDateString()}</td>
              <td>
                <DeleteBtn id={subscriber.id}/>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </main>
  )
}