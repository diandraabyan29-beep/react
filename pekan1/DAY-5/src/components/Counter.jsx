import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <h2>Counter</h2>
      <p>Nilai: {count}</p>

      <button onClick={() => setCount(prev => prev + 1)}>
        Tambah
      </button>

      <button onClick={() => setCount(prev => prev - 1)}>
        Kurang
      </button>
    </div>
  );
}

export default Counter;
