import ProfileBox from "./components/ProfileBox"
import Button from "./components/Button"
import AlertBox from "./components/AlertBox"
import ResponsiveBox from "./components/ResponsiveBox"

function App() {
  return (
    <div style={{ padding: 20 }}>
      <ProfileBox />

      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>

      <AlertBox type="success" message="Berhasil!" />
      <AlertBox type="warning" message="Peringatan!" />
      <AlertBox type="error" message="Error!" />

      <ResponsiveBox />
    </div>
  )
}

export default App
