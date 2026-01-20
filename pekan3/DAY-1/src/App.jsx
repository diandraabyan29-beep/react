import './App.css'
import { UserProvider } from './contexts/UserContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { CartProvider } from './contexts/CartContext'

import Header from './components/header/Header'
import UserProfile from './components/user/UserProfile'
import ThemeToggle from './components/theme/ThemeToggle'
import ThemedCard from './components/theme/ThemedCard'
import ThemedText from './components/theme/ThemedText'
import ProductList from './components/cart/ProductList'
import CartDisplay from './components/cart/CartDisplay'

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <NotificationProvider>
            <CartProvider>
              <Header />
              <ThemeToggle />
              <ThemedCard>
                <ThemedText text="Evaluasi Context API ✅" />
              </ThemedCard>
              <UserProfile />
              <ProductList />
              <CartDisplay />
            </CartProvider>
          </NotificationProvider>
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
