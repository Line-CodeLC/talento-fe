import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
function SalesPeronCard() {
  return (
    <div className="grid grid-cols-6 bg-white p-5">
      <div className="col-span-2">
        <div className="text-[#4B5563]">Name</div>
        <div className="font-semibold">Tomiwa Oyeledu Jim</div>
      </div>
      <div className="col-span-2">
        <div className="text-[#4B5563]">Employee ID</div>
        <div className="font-semibold">69699</div>
      </div>
      <div className="col-span-1">
        <div className="text-[#4B5563]">Start Date</div>
        <div className="font-semibold">12-06-2023</div>
      </div>
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem>Pause</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default SalesPeronCard;
