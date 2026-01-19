import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeBox() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`box ${theme}`}>
      <h3>🎨 Theme Context</h3>
      <p>Tema sekarang: {theme}</p>
      <button onClick={toggleTheme}>Ganti Tema</button>
    </div>
  );
}

export default ThemeBox;
