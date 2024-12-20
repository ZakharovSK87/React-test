import React from "react";

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step: number;
  min: number;
  max: number;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, step, min, max }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label>
        {label}
        <input type="number" value={value} onChange={handleChange} step={step} min={min} max={max} />
      </label>
    </div>
  );
};

export default InputField;
