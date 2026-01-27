import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>404</h1>
      <p className="text-center">
        Halaman tidak ditemukan
      </p>
      <button onClick={() => navigate("/")}>
        Kembali ke Home
      </button>
    </div>
  );
};

export default NotFound;

