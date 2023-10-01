"use client"

import { useRef } from "react"
import { addSubscription } from "../app/actions/subscription"
import AddButton from "./addBtn"

export default function SubscribeForm() {
  const ref = useRef<HTMLFormElement>(null)

return (
    <form
      className="flex justify-center gap-4 p-4"
      ref={ref}
      action={async formData => {
        ref.current?.reset()
        const response  = await addSubscription(formData)
        alert(response)
      }}
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu e-mail principal"
        className="bg-slate-800 p-3 rounded"
        required
      />
      <AddButton />
    </form>
  )
}