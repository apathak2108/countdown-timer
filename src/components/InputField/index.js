import React from "react";
import { StyledInputField } from "./inputField.styled";

const InputField = ({ value, type, placeholder, onChange, maxLength }) => {
  return (
    <StyledInputField
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};

export default InputField;
