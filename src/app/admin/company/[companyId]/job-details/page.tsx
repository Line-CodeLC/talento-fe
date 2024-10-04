import { Separator } from "@/components/ui/separator";
import React from "react";
import SearchBox from "../../../components/SearchBox";
import FilterBox from "../../../components/FilterBox";
import EmployeeListTable from "./components/EmployeeListTable";

function page() {
  return (
    <div className="min-h-screen m-6">
      <div className="bg-white p-5">
        <div className="text-2xl font-semibold">Driver</div>
        <Separator className="mt-2 mb-4" />
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div>Employee Working</div>
            <div className="font-semibold">22</div>
          </div>
          <div>
            <div>Start Date</div>
            <div className="font-semibold">22-03-23</div>
          </div>
          <div>
            <div>Job Type</div>
            <div className="font-semibold"> Part Time Hire </div>
          </div>
        </div>
      </div>
      <div className="text-xl font-medium  mt-4">Hired Employee List</div>
      <div className="flex items-center gap-5">
        <SearchBox />
        <FilterBox />
      </div>
      <div>
        <EmployeeListTable />
      </div>
    </div>
  );
}

export default page;
