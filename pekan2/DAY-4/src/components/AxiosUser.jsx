import { useEffect, useState } from "react";
import axios from "axios";

function AxiosUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="card">
      <h2>Axios API</h2>
      {user ? (
        <>
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telepon:</strong> {user.phone}</p>
        </>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default AxiosUser;
