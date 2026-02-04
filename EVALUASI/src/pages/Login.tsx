import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate("/products")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>

        <input
          placeholder="Email"
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  )
}
