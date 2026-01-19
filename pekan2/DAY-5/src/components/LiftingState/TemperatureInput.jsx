function TemperatureInput({ label, value, onChange, disabled }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}

export default TemperatureInput;
