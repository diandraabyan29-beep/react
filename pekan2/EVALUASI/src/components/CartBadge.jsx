import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartBadge = () => {
  const { state } = useContext(CartContext);

  return <div className="cart-badge">🛒 {state.total}</div>;
};

export default CartBadge;
