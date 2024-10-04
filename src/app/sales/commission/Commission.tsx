import { ArrowUp, ArrowUpAZ, Calendar } from "lucide-react";
import React, { FC } from "react";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import ComissionTable from "./components/ComissionTable";
interface PageProps {}
export const Commission: FC<PageProps> = () => {
  return (
    <div className="h-screen m-5">
      <div className="bg-white p-3 ">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium"> Commission</div>
          <div className="flex items-center cursor-pointer gap-2 border border-[#D0D5DD] rounded-md p-2">
            <Calendar />
            Select Dates
          </div>
        </div>
        <div className="flex items-center gap-2">
          ${" "}
          <span className="font-bold relative  flex text-3xl">
            18,880{" "}
            <div className="absolute top-0 left-28">
              <span className="text-green-400 text-sm  flex items-center">
                <ArrowUp /> 7.4
              </span>
            </div>
          </span>
        </div>
        <div className="h-[100px] mt-5">Graph</div>
      </div>{" "}
      <div className="text-xl  mt-5 mb-2 font-semibold ">Company List</div>
      <div className="flex items-center gap-5">
        <SearchBox />
        <FilterBox />
      </div>
      <div>
        <ComissionTable />
      </div>
    </div>
  );
};
