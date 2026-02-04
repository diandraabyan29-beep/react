import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ pastikan path benar
import type { ReactNode } from "react";

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth(); // ✅ harusnya sekarang jalan
  return isAuth ? <>{children}</> : <Navigate to="/login" replace />;
};
