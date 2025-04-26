import React from "react";

const InputComponent = ({ label, type, name, value, onChange, placeholder, error }) => {
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
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputComponent;
