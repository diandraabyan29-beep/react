import ProfileCard from './components/ProfileCard'
import ExpressionDemo from './components/ExpressionDemo'
import ConditionalDemo from './components/ConditionalDemo'
import ListDemo from './components/ListDemo'

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <ProfileCard
        nama="Zahran"
        foto="https://via.placeholder.com/150"
        bio="Santri React yang sedang belajar"
        skills={['HTML', 'CSS', 'JavaScript', 'React']}
      />

      <ExpressionDemo />
      <ConditionalDemo />
      <ListDemo />
    </div>
  )
}
