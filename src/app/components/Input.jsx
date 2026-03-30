"use client";
import React from "react";

export const Input = ({ setInputValue, inputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={inputValue}
        type="text"
        className="w-[280px] h-[40px] border rounded-md border-[#F3F4F6] focus:outline-none focus:ring-1 focus:ring-[#b7b8b9] focus:border-transparent transition-all duration-300 backdrop-blur-sm text-gray-600 placeholder-[#808080] text-sm pl-3"
        placeholder="Add a new task..."
      />
    </div>
  );
};
