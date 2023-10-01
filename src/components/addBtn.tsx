import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function AddButton() {
  const { pending } = useFormStatus()
  return(
    <button className="bg-sky-700 p-3 rounded">
      { pending ? "Inscrevendo..." : "Se inscrever"}
    </button>
  )
}