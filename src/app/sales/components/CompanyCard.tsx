import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

interface CompanyCardProps {}
const CompanyCard: FC<CompanyCardProps> = () => {
  return (
    <div className="bg-white p-3 ml-6 mr-6 ">
      <div className="flex justify-between p-3">
        <div className="font-bold text-xl">ABC PVT LTD</div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#4B5563] p-2 text-sm text-white rounded-3xl">
            Direct Hire
          </div>
          <div className="bg-[#4B5563] p-2 text-sm text-white rounded-3xl">
            Temporary Hire
          </div>
          <div className="bg-[#4B5563] p-2 text-sm text-white rounded-3xl">
            Part Time Hire
          </div>
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
  );
};

export default CompanyCard;
