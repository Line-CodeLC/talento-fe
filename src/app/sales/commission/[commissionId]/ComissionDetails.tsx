import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import { EllipsisVertical } from "lucide-react";
import React, { FC } from "react";
import SearchBox from "../../components/SearchBox";
import FilterBox from "../../components/FilterBox";
import CommissionDetailsTable from "../components/commissionDetailsTable";
interface PageProps {}
export const CommissionDetails: FC<PageProps> = () => {
  return (
    <div className="h-screen m-5">
      <div className="bg-white p-5 ">
        <div className="flex justify-between ">
          <div className="font-bold text-xl">ABC PVT LTD</div>
          <div className="flex gap-2 items-center">
            <Badge className="p-2 rounded-3xl bg-badge">Direct Hire</Badge>
            <Badge className="p-2 rounded-3xl bg-badge"> Temporary Hire</Badge>
            <Badge className="p-2 rounded-3xl bg-badge"> Part Time Hire</Badge>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Archive</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Separator className="mt-2 mb-4" />
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
      <div className="text-xl  mt-5 mb-2 font-semibold ">
        Hired Employee List
      </div>
      <div className="flex items-center gap-5">
        <SearchBox />
        <FilterBox />
      </div>
      <CommissionDetailsTable />
    </div>
  );
};
