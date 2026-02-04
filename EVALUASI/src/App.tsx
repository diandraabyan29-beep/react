import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import { PrivateRoute } from "./routes/PrivateRoute"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />

      <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}
