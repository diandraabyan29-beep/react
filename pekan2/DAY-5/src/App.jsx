import TemperatureCalculator from "./components/LiftingState/TemperatureCalculator";
import Parent from "./components/PropDrilling/Parent";
import CounterDisplay from "./components/SharedState/CounterDisplay";
import CounterControl from "./components/SharedState/CounterControl";
import ReducerCounter from "./components/ReducerCounter";
import ThemeBox from "./components/ThemeBox";
import { ThemeProvider } from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <div className="app">
        <h1>Evaluasi Harian – Hari 11</h1>

        <TemperatureCalculator />
        <Parent />

        <div className="box">
          <h3>👥 Shared State</h3>
          <CounterDisplay count={count} />
          <CounterControl onIncrement={() => setCount(count + 1)} />
        </div>

        <ReducerCounter />
        <ThemeBox />
      </div>
    </ThemeProvider>
  );
}

export default App;
