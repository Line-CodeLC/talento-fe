import React, { FC } from "react";
import { EditCompanyModal } from "./EditCompanyModal";
import { AddCompanyModal } from "@/app/sales/components/AddCompanyModal";

interface StatusTabs {}
const StatusTabs: FC<StatusTabs> = () => {
  return (
    <div className="flex justify-between  items-center">
      <div className="flex gap-6  ">
        <div className="bg-[#202020] rounded-2xl w-[200px] text-white  cursor-pointer justify-center flex p-2 items-center gap-2">
          Companies
          <div className="bg-white text-companyblue rounded-2xl  text-xs p-2 flex items-center justify-center">
            121
          </div>
        </div>
        <div className="bg-white rounded-2xl w-[200px]  cursor-pointer justify-center flex p-2 items-center gap-2">
          Invited Companies
          <div className="bg-[#3B82F633] text-companyblue rounded-2xl  text-xs p-2 flex items-center justify-center">
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
