"use client"

import { useRef } from "react"
import { listSubscriptions } from "../app/actions/subscription"

export default function ListBtn({text}: {text: string}) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    listSubscriptions()
    alert('dados atualizados')
  }
  
  return (
    <button 
      ref={ref}
      className="bg-gray-500 px-2 py-1 rounded hover:bg-gray-600" 
      onClick={handleClick}
    >
      {text}
    </button>
  )
}