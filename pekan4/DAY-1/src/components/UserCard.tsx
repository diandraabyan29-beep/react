interface User {
  id: number
  name: string
  age: number
  isActive: boolean
}

interface UserCardProps {
  user: User
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Status: {user.isActive ? "Active" : "Inactive"}</p>
    </div>
  )
}
