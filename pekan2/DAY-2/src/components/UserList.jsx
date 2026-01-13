function UserList() {
  const users = [
    { id: 1, name: "Budi" },
    { id: 2, name: "Andi" },
    { id: 3, name: "Zahran" }
  ];

  return (
    <>
      <h3>👥 Daftar User</h3>
      <ul className="list">
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
