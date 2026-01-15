import { useEffect, useState } from "react";

function UserById() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Fetch data user ID:", userId);

    setUser({
      name: `User ${userId}`,
      email: `user${userId}@email.com`,
    });
  }, [userId]);

  return (
    <>
      <h3>Data Pengguna</h3>

      {user && (
        <p>
          Nama: {user.name} <br />
          Email: {user.email}
        </p>
      )}

      <button onClick={() => setUserId(userId + 1)}>
        Ganti User
      </button>
    </>
  );
}

export default UserById;
