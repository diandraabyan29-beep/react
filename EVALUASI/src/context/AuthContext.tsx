import { createContext, useState, useContext } from "react"
import type { ReactNode } from "react"

type AuthContextType = {
  isAuth: boolean
  login: () => void
  logout: () => void
}

// 1. Context
export const AuthContext = createContext<AuthContextType | null>(null)

// 2. Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false)

  const login = () => setIsAuth(true)
  const logout = () => setIsAuth(false)

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 3. Hook helper ✅
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
