import { useState } from "react";

function SyntheticEventDemo() {
  const [text, setText] = useState("");

  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log("Link dicegah oleh preventDefault()");
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 20 }}>
      <h3>Synthetic Event</h3>

      <a href="https://google.com" onClick={handleLinkClick}>
        Klik Link (Dicegah)
      </a>

      <br /><br />

      <input
        type="text"
        placeholder="Ketik sesuatu..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Isi input: {text}</p>
    </div>
  );
}

export default SyntheticEventDemo;
