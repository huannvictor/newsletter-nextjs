import DeleteBtn from "@/src/components/deleteBtn"
import mysql from "mysql2/promise"

export const metadata = {
  title: "Inscritos | Admin"
}

interface SubscriberProps {
  id: number
  email: string
  createdAt: Date
  updatedAt: Date
}


export default async function Subscribers() {
  const db = await mysql.createConnection("mysql://nextjs:nextjs@localhost:3306/newsletter")
  const [ rows ]: any[] = await db.query("SELECT * FROM Subscribers;")
  db.end()

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
        {rows.map((subscriber: SubscriberProps) => (
          <tr key={subscriber.id} className="[&>*]:p-4">
              <td>{subscriber.id}</td>
              <td className="text-left">{subscriber.email}</td>
              <td>{subscriber.createdAt.toDateString()}</td>
              <td>
                <DeleteBtn id={subscriber.id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}