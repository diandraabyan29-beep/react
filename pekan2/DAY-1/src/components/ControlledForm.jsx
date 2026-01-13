import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nama dikirim: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Controlled Component</h3>

      <input
        type="text"
        placeholder="Masukkan nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Live: {name}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
