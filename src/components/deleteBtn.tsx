"use client"

import { useRef } from "react"
import { deleteSubscription } from "../app/actions/add-subscription"

export default function DeleteBtn(prop: { id: number}) {
  const { id } = prop
  const ref = useRef<HTMLButtonElement>(null)

  const handleClick = async () => {
    const response = await deleteSubscription(id)
    alert(response)
  }
  
  return (
    <button 
      ref={ref}
      className="bg-rose-500 px-2 py-1 rounded hover:bg-rose-600" 
      onClick={handleClick}
    >
      deletar
    </button>
  )
}