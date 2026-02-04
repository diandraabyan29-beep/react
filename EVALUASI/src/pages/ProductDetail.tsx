import { useParams } from "react-router-dom"

export default function ProductDetail() {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Detail {id}</h1>
    </div>
  )
}
