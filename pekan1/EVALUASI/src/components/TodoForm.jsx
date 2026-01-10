import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tambah todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TodoForm;
