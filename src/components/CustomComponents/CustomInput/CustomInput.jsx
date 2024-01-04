import React, { useState } from "react";
import CustomLabel from "../CustomLabel/CustomLabel";
import CustomInputBox from "../CustomInputBox/CustomInputBox";
import CustomError from "../CustomError/CustomError";

const CustomInput = ({
  labelText,
  type,
  name,
  placeholder,
  maxLength = 100,
  onInputChange,
  errormsg,
  style = {},
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleBlur = () => {
    switch (type) {
      case "email":
        validateEmail();
        break;
      case "number":
        validateNumber();
        break;
      case "password":
        validatePassword();
        break;
      case "text":
        validateText();
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;
    onInputChange && onInputChange(name, inputValue);
    if (type === "number" && maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }
    setValue(inputValue);
  };

  const validateEmail = () => {
    if (!value.includes("@") || !value.includes(".")) {
      setError(errormsg);
    } else {
      setError("");
    }
  };

  const validateNumber = () => {
    console.log(value.length, value, maxLength);
    if (isNaN(value) || value.length != maxLength) {
      setError(errormsg);
    } else {
      setError("");
    }
  };

  const validatePassword = () => {
    if (value.length < 8) {
      setError(errormsg);
    } else {
      setError("");
    }
  };

  const validateText = () => {
    if (!value.trim()) {
      setError(errormsg);
    } else {
      setError("");
    }
  };

  return (
    <div style={style}>
      <CustomLabel labelText={labelText} style={{}} />
      <CustomInputBox
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={maxLength}
        style={{}}
      />
      {error && <CustomError errorText={error} style={{}} />}
      {error == "" && <CustomError errorText="NO" style={{ color: "#FFF" }} />}
    </div>
  );
};

export default CustomInput;
