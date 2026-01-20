import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { NotificationContext } from '../../contexts/NotificationContext'

export default function Header() {
  const { language } = useContext(LanguageContext)
  const { notifications } = useContext(NotificationContext)

  return (
    <div className="header">
      <span>Bahasa: {language}</span>
      <span>Notifikasi: {notifications}</span>
    </div>
  )
}
