import React from "react";

const CustomInputBox = ({
  type,
  value,
  placeholder,
  onChange,
  style,
  name,
  maxLength,
  classname,
}) => {

  return (
    <input
      style={style}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={classname}
    />
  );
};

export default CustomInputBox;
