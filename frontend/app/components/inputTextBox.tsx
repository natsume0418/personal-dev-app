import React from "react";
import "../css/inputTextBox.css";

type InputTextBoxProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputTextBox: React.FC<InputTextBoxProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  onBlur,
  error,
}) => {
  return (
    <>
      <div className="input-wrapper">
        <label className="input-label">{label}</label>
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
        />
      </div>
      <p className="error-message ">{error}</p>
    </>
  );
};

export default InputTextBox;
