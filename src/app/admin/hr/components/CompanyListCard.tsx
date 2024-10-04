import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, EllipsisVertical } from "lucide-react";
function CompanyListCard() {
  return (
    <div className="">
      <div className="grid grid-cols-10 p-3 justify-center m-5">
        <div className="col-span-2">
          <div className="text-textgray">Company Name</div>
          <div className="font-semibold"> ABC PVT LTD</div>
        </div>
        <div className="col-span-2">
          <div className="text-textgray">Allocated Date</div>
          <div className="font-semibold">12-06-2023</div>
        </div>
        <div className="col-span-5">
          <div className="text-textgray">Selected Services </div>
          <div className="font-semibold">
            {" "}
            Direct Hire, Temporary Hire, Part Time Hire, Permanent Hire
          </div>
        </div>
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Change HR</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default CompanyListCard;
