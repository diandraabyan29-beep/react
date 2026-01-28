import { useState, ChangeEvent, FormEvent } from "react"

interface FormState {
  name: string
  age: number
}

export const UserForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    age: 0
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} />
      <input name="age" type="number" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
