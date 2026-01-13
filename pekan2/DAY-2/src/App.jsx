import IfElseDemo from "./components/IfElseDemo";
import TernaryAndDemo from "./components/TernaryAndDemo";
import SwitchStatus from "./components/SwitchStatus";
import UserList from "./components/UserList";
import EmptyStateList from "./components/EmptyStateList";

function App() {
  return (
    <div className="app">
      <h1 className="title">📘 Evaluasi Harian</h1>

      <div className="grid">
        <div className="card">
          <h3>🔐 Status Login</h3>
          <IfElseDemo />
        </div>

        <div className="card">
          <h3>🔔 Notifikasi</h3>
          <TernaryAndDemo />
        </div>

        <div className="card">
          <h3>⚙️ Status Sistem</h3>
          <SwitchStatus status="success" />
        </div>

        <div className="card">
          <h3>👥 Daftar User</h3>
          <UserList />
        </div>

        <div className="card">
          <h3>📭 Empty State</h3>
          <EmptyStateList />
        </div>
      </div>
    </div>
  );
}

export default App;
