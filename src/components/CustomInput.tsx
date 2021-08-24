import React from "react";
import PropTypes from "prop-types";

export const CustomInput: React.FC<{
  type: string;
  value: string;
  placeholder: string;
  borderRadius?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, value, placeholder, borderRadius, onChange }) => {
  return (
    <input
      className={`custom-input ${
        borderRadius ? (borderRadius === "top" ? "br-top" : "br-bottom") : ""
      }`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

CustomInput.propTypes = {
  borderRadius: PropTypes.oneOf(["top", "bottom"]),
};
