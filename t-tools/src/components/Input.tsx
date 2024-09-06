import React from "react";

interface props {
    value?: any;
    label?: string;
    name?: string;
    placeholder?: string;
    type: string;
    className?: string;
    onChange?: () => void;
    onclick?: () => void;
}

const Input: React.FC<props> = ({ value, label, name, placeholder, type, className, onChange, onclick }) => (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onclick}
      />
    </div>
  );
  
  export default Input;