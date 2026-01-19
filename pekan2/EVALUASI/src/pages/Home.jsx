import { useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import CartBadge from "../components/CartBadge";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { theme, dispatch } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>🛒 Product Catalog</h1>
        <CartBadge />
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          Toggle Theme
        </button>
      </header>

      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter value={category} onChange={setCategory} />

      <ProductList search={search} category={category} />
    </div>
  );
};

export default Home;
