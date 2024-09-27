import React from "react";

function SalesStatusTabs() {
  return (
    <div className="flex gap-6 mt-4  ">
      <div className="bg-[#202020] rounded-2xl w-[200px] text-white  cursor-pointer justify-center flex p-2 items-center gap-2">
        Company List
        <div className="bg-white text-companyblue rounded-2xl  text-xs p-2 flex items-center justify-center">
          121
        </div>
      </div>
      <div className="bg-white rounded-2xl w-[200px]  cursor-pointer justify-center flex p-2 items-center gap-2">
        Employee List
        <div className="bg-[#3B82F633] text-companyblue rounded-2xl  text-xs p-2 flex items-center justify-center">
          121
        </div>
      </div>
    </div>
  );
}

export default SalesStatusTabs;
