import React, { FC } from "react";

interface CustomBadgeProps {
  status: boolean;
}

const CustomBadge: FC<CustomBadgeProps> = ({ status }) => {
  return (
    <div
      className={`items-center flex justify-center p-1 rounded-full w-[100px] 
      border ${
        status
          ? "border-[#10B331] bg-[#10B3311A]"
          : "border-[#4B5563] bg-[#4B55631A]"
      }`}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full mr-2 ${
          status ? "bg-[#10B331]" : "bg-[#4B5563]"
        }`}
      ></span>
      <span>{status ? "Active" : "Paused"}</span>
    </div>
  );
};

export default CustomBadge;
