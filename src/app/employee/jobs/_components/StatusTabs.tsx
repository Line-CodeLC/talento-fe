import React, { FC } from "react";

interface StatusTabs {}
const StatusTabs: FC<StatusTabs> = () => {
  return (
    <div className="flex justify-between  items-center">
      <div className="flex gap-6  ">
        <div className="bg-[#202020] rounded-2xl w-[170px] text-white  cursor-pointer justify-center flex p-2 items-center gap-2">
          Favourites
          <div className="bg-white text-companyblue rounded-2xl  text-xs p-2 w-5 h-5 p-2 flex items-center justify-center">
            4
          </div>
        </div>
        <div className="bg-white rounded-2xl w-[170px] border border-black  cursor-pointer justify-center flex p-2 items-center gap-2">
          Selected
          <div className="bg-[#3B82F633] text-companyblue rounded-2xl  text-xs  flex items-center justify-center w-5 h-5 p-2">
            2
          </div>
        </div>
        <div className="bg-white rounded-2xl w-[170px]  border border-black cursor-pointer justify-center flex p-2 items-center gap-2">
          Hired
          <div className="bg-[#3B82F633] text-companyblue rounded-2xl  text-xs p-2  w-5 h-5 p-2 flex items-center justify-center">
            2
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTabs;
