import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import TimesheetForm from "./TimesheetForm";
import TimeSheetTable from "./TimeSheetTable";

function page() {
  return (
    <div className="h-full m-5">
      <div className="bg-white p-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            {" "}
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg/768px-Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg.png"
              alt=""
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <div>Joseph David</div>
              <div className="text-[#94A3B8]">Truck Driver</div>
            </div>
          </div>
          <div className="bg-gray-50 p-2 rounded-2xl w-[100px] items-center flex justify-center border border-[3px] border-[#4B5563]">
            pending
          </div>
        </div>
        <Separator className="mt-3 mb-4" />
        <div className="bg-[#F8FAFC] p-3 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[#64748B]">hired date</span>
              <span className="font-semibold">12-12-2023</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#64748B]">hired date</span>
              <span className="font-semibold">12$/Hr</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#64748B]">hired date</span>
              <span className="font-semibold">12-12-2023</span>
            </div>
          </div>
        </div>
      </div>

      <TimesheetForm />
      <div className="mt-5 font-semibold text-2xl">Time Sheet History</div>
      <TimeSheetTable />
    </div>
  );
}

export default page;
