import { Link } from "react-router-dom"

export default function Products() {
  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {[1, 2, 3].map(id => (
        <Link
          key={id}
          to={`/products/${id}`}
          className="border p-4 rounded shadow hover:bg-gray-100"
        >
          Product {id}
        </Link>
      ))}
    </div>
  )
}
