import React from "react";

interface props {
    value?: any;
    defaultValue?: any;
    label?: string;
    name?: string;
    placeholder?: string;
    type: string;
    className?: string;
    min?: number;
    max?: number;
    onChange?: any;
    onclick?: any;
    checked?: boolean;
    id?: string;
}

const Input: React.FC<props> = ({ value, defaultValue, label, name, placeholder, type, className, min, max, onChange, onclick, id, checked }) => (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        className={className}
        min={min}
        max={max}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onclick}
        checked={checked}
      />
    </div>
  );
  
  export default Input;