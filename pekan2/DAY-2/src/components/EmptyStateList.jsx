function EmptyStateList() {
  const data = [];

  if (data.length === 0) {
    return <p className="empty">🚫 Data masih kosong</p>;
  }

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default EmptyStateList;
