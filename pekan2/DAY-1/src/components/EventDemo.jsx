import { useState } from "react";

function EventDemo() {
  const [message, setMessage] = useState("Belum ada aksi");

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 20 }}>
      <h3>Event Handler</h3>

      <button
        onClick={() => setMessage("Tombol diklik!")}
        onMouseEnter={() => setMessage("Mouse masuk")}
        onMouseLeave={() => setMessage("Mouse keluar")}
      >
        Arahkan / Klik Saya
      </button>

      <p>{message}</p>
    </div>
  );
}

export default EventDemo;
