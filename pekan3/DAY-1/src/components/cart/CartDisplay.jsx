import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export default function CartDisplay() {
  const { cart, removeItem, totalPrice, clearCart } = useContext(CartContext)

  return (
    <div className="cart">
      <h3>🧾 Cart</h3>

      {cart.length === 0 && <p>Cart masih kosong</p>}

      {cart.map((item, index) => (
        <div key={index} className="product">
          <img
            src={item.image}
            alt={item.name}
            width="50"
            style={{ borderRadius: '6px' }}
          />
          <span>{item.name}</span>
          <span>Rp{item.price.toLocaleString()}</span>
          <button className="button" onClick={() => removeItem(index)}>
            X
          </button>
        </div>
      ))}

      <hr />
      <p><strong>Total: Rp{totalPrice.toLocaleString()}</strong></p>
      <button className="button" onClick={clearCart}>Clear Cart</button>
    </div>
  )
}
