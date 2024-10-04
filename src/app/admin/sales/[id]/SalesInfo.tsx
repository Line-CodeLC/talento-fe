import React from "react";
import { Progress } from "@/components/ui/progress";
import { HandCoins } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SalesStatusTabs from "../components/StatusTabs";
import SearchBox from "../../components/SearchBox";
import FilterBox from "../../components/FilterBox";
import SalesTable from "../components/SalesTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

function SalesInfo() {
  return (
    <div className=" m-5 p-2">
      <div className="bg-white w-full p-5 ">
        <div className="flex justify-between items-center mb-5">
          {" "}
          <div className="text-2xl font-semibold ">Personal Information</div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit information</DropdownMenuItem>
              <DropdownMenuItem>Pause</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-[#F3F4F6] p-3 grid grid-cols-2 rounded-xl">
            <div>
              <div>Employee Target</div>
              <div className="text-lg  font-semibold">50/70</div>
            </div>
            <div className="">
              <div className="text-[#F31A1A]">46 more to complete</div>
              <Progress value={30} className="h-3" />
            </div>
          </div>
          <div className="flex bg-[#F3F4F6] gap-4 p-3 rounded-lg">
            <div className="bg-[#10B33133] rounded-full p-3">
              <HandCoins />
            </div>
            <div>
              <div>Total Commission</div>
              <div className="text-lg font-semibold">10212</div>
            </div>
          </div>
        </div>
        <Separator className="mt-5 mb-4" />
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="text-[#4B5563]">Name</div>
            <div className="font-semibold">Tomiwa Oyeledu Jim</div>
          </div>
          <div>
            <div className="text-[#4B5563]">Employee ID</div>
            <div className="font-semibold">69699</div>
          </div>
          <div>
            <div className="text-[#4B5563]">Email</div>
            <div className="font-semibold">abcd696969@gmail.com</div>
          </div>
          <div>
            <div className="text-[#4B5563]">Start Date</div>
            <div className="font-semibold">12-06-2023</div>
          </div>
          <div>
            <div className="text-[#4B5563]">Phone Number</div>

            <div className="font-semibold">12-06-2023</div>
          </div>
          <div>
            <div className="text-[#4B5563]">ID Proof</div>

            <div className="font-semibold">12-06-2023</div>
          </div>
          <div>
            <div className="text-[#4B5563]">Address</div>
            <div className="font-semibold">
              Abc gali, abc road near abc medical, Ontario, Canada
            </div>
          </div>
        </div>
      </div>
      <SalesStatusTabs />
      <div className="flex items-center gap-5">
        <SearchBox />
        <FilterBox />
      </div>
      <div className="bg-white">
        <SalesTable />
      </div>
    </div>
  );
}

export default SalesInfo;
