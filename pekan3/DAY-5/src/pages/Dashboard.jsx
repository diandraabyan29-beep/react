import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <button
        className="link-btn"
        onClick={() => navigate("/products")}
      >
        Ke Halaman Products
      </button>

      <button
        className="secondary"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
