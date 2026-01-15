import { useEffect, useState } from "react";

function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Nama berubah:", name);
  }, [name]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tambah Count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Masukkan nama"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default MultipleEffects;
