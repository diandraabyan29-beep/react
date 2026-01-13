import EventDemo from "./components/EventDemo";
import SyntheticEventDemo from "./components/SyntheticEventDemo";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Evaluasi Hari 7</h1>

      <EventDemo />
      <SyntheticEventDemo />
      <ControlledForm />
      <UncontrolledForm />
      <RegisterForm />
    </div>
  );
}

export default App;
