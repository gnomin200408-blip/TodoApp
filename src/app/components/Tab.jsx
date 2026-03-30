import React from "react";

export const Tab = ({ text, isActive, wSize, onClick }) => {
  return (
    <div onClick={onClick}>
      {isActive ? (
        <div
          className=" h-[32px] rounded-md flex justify-center items-center text-sm bg-[#3C82F6] text-white  transition-all duration-100"
          style={{ width: wSize }}
        >
          {text}
        </div>
      ) : (
        <div
          className=" h-[32px] rounded-md flex justify-center items-center text-sm bg-[#F3F4F6] text-[#363636] transition-all duration-100"
          style={{ width: wSize }}
        >
          {text}
        </div>
      )}
    </div>
  );
};
