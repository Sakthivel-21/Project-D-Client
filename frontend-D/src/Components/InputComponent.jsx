import React from "react";

const InputComponent = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputComponent;
