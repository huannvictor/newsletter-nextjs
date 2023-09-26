import SubscriptionsTable from "@/src/components/subscriptionsTable"
import mysql from "mysql2/promise"

export const metadata = {
  title: "Inscritos | Admin"
}


export default async function Subscribers() {
  const db = await mysql.createConnection("mysql://nextjs:nextjs@localhost:3306/newsletter")
  const [ rows ] = await db.query("SELECT * FROM Subscribers;")
  db.end()

  console.log(rows)

  return  (
    <main>
      <h1 className="text-2xl font-bold mb-8">Lista de inscritos</h1>
      <table className="w-full text-center">
        <thead className="border-b-[1px]">
          <tr className="[&>*]:py-4">
            <th>ID</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          < SubscriptionsTable rows={rows} />
        </tbody>
      </table>
    </main>
  )
}