import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function TemperatureCalculator() {
  const [celsius, setCelsius] = useState("");

  const handleCelsiusChange = (value) => {
    setCelsius(value);
  };

  const fahrenheit =
    celsius === "" ? "" : (celsius * 9) / 5 + 32;

  return (
    <div className="box">
      <h3>🌡️ Lifting State Up</h3>
      <TemperatureInput
        label="Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        disabled
      />
    </div>
  );
}

export default TemperatureCalculator;
