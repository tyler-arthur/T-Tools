import React from "react";

interface props {
    value?: any;
    label?: string;
    name?: string;
    placeholder?: string;
    type: string;
    className?: string;
    min?: number;
    max?: number;
    onChange?: any;
    onclick?: any;
}

const Input: React.FC<props> = ({ value, label, name, placeholder, type, className, min, max, onChange, onclick }) => (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className={className}
        min={min}
        max={max}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onclick}
      />
    </div>
  );
  
  export default Input;