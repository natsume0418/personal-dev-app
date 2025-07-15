import React from "react";

type ValidateInputProps = {
  label: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
};

const ValidateInput: React.FC<ValidateInputProps> = ({
  label,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <>
      <input id={name} name={name} value={value} onChange={onChange} />
      <p>{error}</p>
    </>
  );
};

export default ValidateInput;
