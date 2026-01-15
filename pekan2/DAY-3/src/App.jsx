import "./main.css";
import EffectLog from "./components/EffectLog";
import UserById from "./components/UserById";
import WindowSizeTracker from "./components/WindowSizeTracker";
import MultipleEffects from "./components/MultipleEffects";
import FakeFetchData from "./components/FakeFetchData";

function App() {
  return (
    <>
      <h1>Evaluasi Harian - useEffect</h1>

      <section>
        <EffectLog />
      </section>

      <section>
        <UserById />
      </section>

      <section>
        <WindowSizeTracker />
      </section>

      <section>
        <MultipleEffects />
      </section>

      <section>
        <FakeFetchData />
      </section>
    </>
  );
}

export default App;
