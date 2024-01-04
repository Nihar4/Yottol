import React from "react";

const CustomButton = ({ style, text, className, onClick }) => {
  const defaultStyle = {
    borderRadius: "45px",
    background: "#000FFF",
    color: "#FFF",
    fontFamily: "Open Sans",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-1px",
    border: "none",
  };

  return (
    <button
      className={className}
      style={{ ...defaultStyle, ...style }}
      onClick={onClick ? onClick : null}
    >
      {text}
    </button>
  );
};

export default CustomButton;
