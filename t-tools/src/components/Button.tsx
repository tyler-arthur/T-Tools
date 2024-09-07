import React from "react";

interface props {
    value?: any;
    className?: string;
    text?: string;
    onclick?: any;
    disabled?: boolean;
}

const Button: React.FC<props> = ({ value, text, className, onclick }) => (
    <div className="form-group">
      <button
        type="button"
        value={value}
        className={className}
        onClick={onclick}
        disabled={false}
      >{text}</button>
    </div>
  );
  
  export default Button;