import React from "react";

const Button = ({ text, height = 30, width = 120 }) => {
  return (
    <button
      style={{
        backgroundColor: "#f4ce14",
        borderColor: "transparent",
        height,
        width,
        borderRadius: 20,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
