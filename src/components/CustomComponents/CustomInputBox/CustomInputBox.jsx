import React from "react";

const CustomInputBox = ({
  type,
  value,
  placeholder,
  onChange,
  style,
  name,
  maxLength,
  onBlur,
}) => {
  const defaultStyle = {
    width: "160px",
    fontSize: "12px",
    border: "1.5px solid #011627",
    borderRadius: "49px",
    backgroundColor: "transparent",
    padding: "20px 16px",
    display: "block",
    marginBottom: "2px",
    marginTop: "2px",
    marginLeft: "-19px",
    height: "50px",
    flexshrink: "0",
    letterSpacing: "-0.8px",
    fontStyle: "normal",
    fontWeigth: "400",
  };

  return (
    <input
      style={{ ...defaultStyle, ...style }}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      onBlur={onBlur} // Pass handleBlur prop to onBlur
    />
  );
};

export default CustomInputBox;
