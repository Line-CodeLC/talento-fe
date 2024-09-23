import React, { FC } from "react";
import { AddCompanyModal } from "./AddCompanyModal";
interface StatusTabs {}
const StatusTabs: FC<StatusTabs> = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 p-8">
        <div className="bg-[#202020] rounded-2xl text-white w-[150px] justify-center flex p-3 items-center gap-2">
          Active
          <div className="bg-white text-red-500 rounded-2xl  text-xs p-2 flex items-center justify-center">
            121
          </div>
        </div>
        <div className="bg-white rounded-2xl w-[150px] justify-center flex p-3 items-center gap-2">
          Archived
          <div className="bg-[#E84B0133] text-red-500 rounded-2xl  text-xs p-2 flex items-center justify-center">
            121
          </div>
        </div>
      </div>
      <div>
        <AddCompanyModal />
      </div>
    </div>
  );
};

export default StatusTabs;
