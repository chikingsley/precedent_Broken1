import React from 'react';

interface InputWithLabelProps {
  label: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="inputField" className="mb-1 text-sm">{label}</label>
      <input 
        id="inputField" 
        type="text" 
        className="py-2 px-4 border border-gray-300 hover:border-blue-500 transition-colors duration-200 ease-in-out animate-glow focus:outline-none" 
      />
    </div>
  );
}

export default InputWithLabel;
