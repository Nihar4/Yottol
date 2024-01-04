import React from "react";

const CustomLabel = ({ labelText, style }) => {
  const defaultStyle = {
    color: "#011627",
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "-0.65px",
    display: "block",
  };

  return <label style={{ ...defaultStyle, ...style }}>{labelText}</label>;
};

export default CustomLabel;
