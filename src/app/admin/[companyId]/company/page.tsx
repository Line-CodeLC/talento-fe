import CustomBadge from "@/components/ui/CustomBadge";
import { HandCoins, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, EllipsisVertical } from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";
import JobTable from "../components/JobTable";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";

function page() {
  return (
    <div className="h-screen  m-6 mt-">
      <div className="bg-white p-5">
        <div className="flex justify-between items-center  ">
          <div className="flex items-center gap-4">
            <div className="font-semibold text-2xl">ABC PVT LTD</div>
            <CustomBadge status={true} />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit information</DropdownMenuItem>
              <DropdownMenuItem>Pause</DropdownMenuItem>
              <DropdownMenuItem>Change HR</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-2 mt-4 gap-5 mb-5">
          {" "}
          <div className="flex bg-[#EFEEEB] gap-2 p-3 rounded-lg">
            <div className="bg-gray-300  rounded-full p-3">
              <Users />
            </div>
            <div>
              <div>Total Hired Employees</div>
              <div className="font-semibold">10212</div>
            </div>
          </div>
          <div className="flex bg-[#EFEEEB] gap-2 p-3 rounded-lg">
            <div className="bg-[#10B33133] rounded-full p-3">
              <HandCoins />
            </div>
            <div>
              <div>Total Commission</div>
              <div className="font-semibold">$10212</div>
            </div>
          </div>
        </div>
        <Separator className="mt-2 mb-4" />
        <div className="grid grid-cols-3 p-3">
          <div>
            <div className="text-[#4B5563]">Onboard Date</div>
            <div className="font-semibold">12-06-2023</div>
          </div>
          <div>
            <div className="text-[#4B5563]">Onboarded By</div>
            <div className="font-semibold">Kamal Jain</div>
          </div>
          <div>
            <div className="text-[#4B5563]">HR Allocated</div>
            <div className="font-semibold">Jimmy Kim</div>
          </div>
        </div>
        <div className="grid grid-cols-3 p-3">
          <div>
            <div className="text-[#4B5563]">Email</div>
            <div className="font-semibold">abcd696969@gmail.com</div>
          </div>
          <div>
            <div className="text-[#4B5563]">Phone Number</div>
            <div className="font-semibold">9323333333333</div>
          </div>
          <div>
            <div className="text-[#4B5563]">Address</div>
            <div className="font-semibold">Dummy address</div>
          </div>
        </div>
      </div>
      <div className="font-semibold text-2xl m-2">Job List</div>
      <div className="flex items-center gap-5">
        <SearchBox />
        <FilterBox />
      </div>
      <div className="bg-white p-3">
        <JobTable />
      </div>
    </div>
  );
}

export default page;
