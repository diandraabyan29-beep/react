import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-100">
      <h1 className="text-3xl font-bold mb-4">Home (Public)</h1>
      <Link
        to="/login"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Ke Login
      </Link>
    </div>
  );
}
