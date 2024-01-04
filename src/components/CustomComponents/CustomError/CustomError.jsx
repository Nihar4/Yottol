import React from "react";

const CustomError = ({ errorText, style }) => {
  const defaultStyle = {
    color: "#011627",
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontStyle: "italic",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-0.65px",
  };

  return <p style={{ ...defaultStyle, ...style }}>{errorText}</p>;
};

export default CustomError;
