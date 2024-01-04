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
  classname,
  style = {},
  style1 = {},
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let inputValue = e.target.value;
    onInputChange && onInputChange(name, inputValue);
    if (type === "number" && maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }
    setValue(inputValue);
  };

  return (
    <div style={style}>
      <CustomLabel labelText={labelText} style={{}} />
      <CustomInputBox
        type={type}
        value={value}
        name={name}
        classname={classname}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxLength}
        style={style1}
      />
    </div>
  );
};

export default CustomInput;
