import { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("Zahran");
  const [age, setAge] = useState(20);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="box">
      <h2>User Profile</h2>

      {isEditing ? (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={() => setIsEditing(false)}>Simpan</button>
        </>
      ) : (
        <>
          <p>Nama: {name}</p>
          <p>Usia: {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default UserProfile;

