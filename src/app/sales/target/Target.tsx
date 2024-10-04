import { Progress } from "@/components/ui/progress";
import { ArrowDown, Calendar } from "lucide-react";
import React, { FC } from "react";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import TargetTable from "./components/page";
interface PageProps {}
export const Target: FC<PageProps> = () => {
  return (
    <div className="h-screen m-5 ">
      <div className="grid grid-cols-2  gap-5">
        <div className="bg-white w-full p-4 ">
          <div className="text-2xl font-medium mb-10"> Employee Progress</div>
          <div>
            <div className="">
              <div>Your Progress</div>
              <div className="text-[#F31A1A] font-semibold">
                6 more to complete
              </div>
              <Progress value={30} className="h-3" />
            </div>
          </div>
        </div>
        <div className="bg-white w-full p-4 flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="text-2xl font-medium">Employee</div>
            <div className="flex items-center cursor-pointer gap-2 border border-[#D0D5DD] rounded-md p-2">
              <Calendar />
              Select Dates
            </div>
          </div>
          <div className="text-3xl font-bold">1200</div>
          <div className="flex">
            <ArrowDown className="text-red-500" />
            <div>
              <span className="text-red-500">10 %</span> vs Last Month
            </div>
          </div>
        </div>
      </div>
      <div className="text-2xl font-semibold mt-4 mb-2">History</div>
      <div className="flex items-center gap-5">
        <SearchBox />
        <FilterBox />
      </div>

      <div className="">
        <TargetTable />
      </div>
    </div>
  );
};
