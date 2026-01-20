import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    isLogin: false
  })

  const login = (name, email) => {
    setUser({ name, email, isLogin: true })
  }

  const logout = () => {
    setUser({ name: '', email: '', isLogin: false })
  }

  const updateProfile = (name, email) => {
    setUser(prev => ({ ...prev, name, email }))
  }

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  )
}
