"use client"

import { QueryResultRow } from "@vercel/postgres";
import DeleteBtn from "./deleteBtn";
import ListBtn from "./listBtn";

export default function SubscriptionsList({rows}: {rows: QueryResultRow[] | undefined}) {  
  const f = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  console.log(rows)

  return (
    <>
    {rows && rows.map(subscriber => (
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
      <ListBtn text="atualizar dados"/>
    </>
  )
}