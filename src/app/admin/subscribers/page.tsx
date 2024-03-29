import ListBtn from "@/src/components/listBtn"
import SubscriptionsList from "@/src/components/subscriptionsList"
import { listSubscriptions } from "../../actions/subscription"

export default async function Subscribers() {
  const rows = await listSubscriptions()

  return  (
    <main>
      <h1 className="text-2xl font-bold mb-8">Lista de inscritos</h1>
      <ListBtn text="Atualizar dados"/>
      <table className="w-full text-center">
        <thead className="border-b-[1px]">
          <tr className="[&>*]:py-4">
            <th>ID</th>
            <th>Email</th>
            <th>Created At</th>
            <td>Ação</td>
          </tr>
        </thead>
          <SubscriptionsList rows={rows}/>
      </table>
    </main>
  )
}