'use client'

import DeleteBtn from "@/src/components/deleteBtn"
import { useEffect, useState } from "react"

interface SubscriberProps {
  id: number
  email: string
  created_at: string
  updated_at: string
}


export default function Subscribers() {
  
  const [rows, setRows] = useState<SubscriberProps[]>([])

  const fetchRows = async () => {
    try {
      const response = await fetch("/api/get-subscribers", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
  
      if (!response.ok) {
        console.log("Erro na requisição:", response.status)
        return
      } 
      
      const {subscribers} = await response.json()

      if (subscribers) {
        setRows(subscribers.rows)
      }
      if (!subscribers) console.log('A resposta está vazia.')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchRows()
  }, [])

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
              <td>{subscriber.created_at}</td>
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