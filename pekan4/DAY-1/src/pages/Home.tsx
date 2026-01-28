import { UserCard } from "../components/UserCard"

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <UserCard
        user={{ id: 1, name: "Abyan", age: 20, isActive: true }}
      />
    </div>
  )
}

export default Home
