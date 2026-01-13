import { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      setError("Email tidak valid");
      return;
    }

    if (form.password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    setError("");
    alert("Registrasi berhasil!");
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form Pendaftaran</h3>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Daftar</button>
    </form>
  );
}

export default RegisterForm;
