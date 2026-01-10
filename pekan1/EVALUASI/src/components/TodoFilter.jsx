function TodoFilter({ filter, setFilter }) {
  return (
    <div className="filters">
      {["all", "active", "completed"].map((type) => (
        <button
          key={type}
          className={filter === type ? "active" : ""}
          onClick={() => setFilter(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
