'use client'

export default function DeleteBtn(subscribeId: { id: number }) {
  async function handleClick() {
    const {id} = subscribeId

    const response = await fetch("/api/subscribers", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json())

    if (response.deleted) {
      alert("Email deletado com sucesso!")
    } else {
      alert("Algo deu errado!")
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