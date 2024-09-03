import React from "react";

interface props {
    value?: any;
    label?: string;
    name?: string;
    placeholder?: string;
    type: string;
    onChange?: () => void;
}

const Input: React.FC<props> = ({ value, label, name, placeholder, type, onChange }) => (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
  
  export default Input;