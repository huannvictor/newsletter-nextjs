'use client'

interface DeleteBtnProps {
  id: number
  onDelete: () => void
}


export default function DeleteBtn({id, onDelete}: DeleteBtnProps) {
  async function handleClick() {

    try {
      const response = await fetch("/api/delete-subscriber", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" }
      })

      if (response) alert("Email deletado com sucesso!")
      onDelete()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button 
      className="bg-rose-500 px-2 py-1 rounded hover:bg-rose-600" 
      onClick={handleClick}
    >
      deletar
    </button>
  )
}