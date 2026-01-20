import { useUserContext } from '../../hooks/useUserContext'

export default function UserProfile() {
  const { user, login, logout } = useUserContext()

  return (
    <div className="profile">
      {user.isLogin ? (
        <>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
          <button className="button" onClick={logout}>Logout</button>
        </>
      ) : (
        <button
          className="button"
          onClick={() => login('Santri React', 'react@mail.com')}
        >
          Login
        </button>
      )}
    </div>
  )
}
