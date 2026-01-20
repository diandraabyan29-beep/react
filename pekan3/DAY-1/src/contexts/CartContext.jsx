import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = product => {
    setCart(prev => [...prev, product])
  }

  const removeItem = index => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const clearCart = () => setCart([])

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}
