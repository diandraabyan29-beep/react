interface Product {
  id: number
  name: string
  price: number
}

interface ProductListProps {
  products: Product[]
  onSelect: (id: number) => void
}

export const ProductList = ({ products, onSelect }: ProductListProps) => {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id} onClick={() => onSelect(p.id)}>
          {p.name} - Rp{p.price}
        </li>
      ))}
    </ul>
  )
}
