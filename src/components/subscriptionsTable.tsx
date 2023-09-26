interface SubscriberProps {
  id: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export default function SubscriptionsTable(rows: SubscriberProps[]) {
  return (
    rows.map((subscriber: SubscriberProps) => (
      <tr key={subscriber.id} className="[&>*]:p-4">
        <td>{subscriber.id}</td>
        <td className="text-left">{subscriber.email}</td>
        <td>{subscriber.createdAt.toDateString()}</td>
      </tr>
    ))
  )
}