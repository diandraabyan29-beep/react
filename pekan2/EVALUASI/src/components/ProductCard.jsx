import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatRupiah } from "../utils/formatRupiah";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>

      <p className="price">
        {formatRupiah(product.price * 15000)}
      </p>

      <button onClick={() => dispatch({ type: "ADD_ITEM" })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
