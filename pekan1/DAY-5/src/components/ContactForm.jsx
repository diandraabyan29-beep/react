import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="box">
      <h2>Contact Form</h2>

      <input
        name="firstName"
        placeholder="Nama Depan"
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Nama Belakang"
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <hr />

      <p>Nama: {form.firstName} {form.lastName}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}

export default ContactForm;
