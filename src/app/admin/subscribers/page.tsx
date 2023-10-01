
import DeleteBtn from "@/src/components/deleteBtn"
import { listSubscriptions } from "../../actions/add-subscription"

interface SubscriberProps {
  id: number
  email: string
  created_at: Date
  updated_at: Date
}


export default async function Subscribers() {
  const {rows} = await listSubscriptions()

  const f = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

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
        {rows.map(subscriber => (
          <tr key={subscriber.id} className="[&>*]:p-4">
              <td>{subscriber.id}</td>
              <td className="text-left">{subscriber.email}</td>
              <td>{f.format(new Date(subscriber.created_at))}</td>
              <td>
                <DeleteBtn 
                  id={subscriber.id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}