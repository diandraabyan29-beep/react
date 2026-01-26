import { useNavigate } from "react-router-dom";
import { login, isAuthenticated } from "../utils/auth";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <button onClick={handleLogin}>Masuk</button>
      <p className="text-center">
        Simulasi login tanpa backend
      </p>
    </div>
  );
};

export default Login;
