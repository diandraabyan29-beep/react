import { createContext, useContext, useState, ReactNode } from "react"

interface AuthContextType {
  isLogin: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        login: () => setIsLogin(true),
        logout: () => setIsLogin(false)
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}
