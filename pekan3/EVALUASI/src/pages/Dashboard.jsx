import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-green-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="mb-4">Halaman ini hanya bisa diakses setelah login</p>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
