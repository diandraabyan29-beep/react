import { createContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import type { Product } from "../types/product"

type ProductContextType = {
  products: Product[]
  loading: boolean
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  )
}
