import React from "react";

const ButtonComponent = ({ children, className, onClick, type = "button"}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 font-semibold rounded-lg shadow-md bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;