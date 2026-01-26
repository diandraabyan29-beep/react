import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="container">
      <h2>Products</h2>

      <button onClick={() => setSearchParams({ category: "laptop" })}>
        Laptop
      </button>

      <button onClick={() => setSearchParams({ category: "hp" })}>
        Handphone
      </button>

      <button onClick={() => setSearchParams({})}>
        Reset Filter
      </button>

      <p className="text-center">
        Filter aktif: <b>{category || "Semua Produk"}</b>
      </p>
    </div>
  );
};

export default Products;
