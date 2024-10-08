import React, { FC } from "react";

interface CustomBadgeProps {
  status: boolean;
}

const CustomBadgeStaus: FC<CustomBadgeProps> = ({ status }) => {
  return (
    <div
      className={`items-center flex justify-center p-1 rounded-full w-[100px] 
      border ${
        status
          ? "border-[#10B331] bg-[#10B3311A] text-green-500 font-semibold"
          : "border-[#4B5563] bg-[#4B55631A] text-[#4B5563] font-semibold"
      }`}
    >
      <span>{status ? "Recieved" : "Pending"}</span>
    </div>
  );
};

export default CustomBadgeStaus;
