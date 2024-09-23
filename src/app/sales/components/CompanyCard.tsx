import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CompanyCardProps {}
const CompanyCard: FC<CompanyCardProps> = () => {
  return (
    <div className="bg-white p-5  ">
      <div className="flex justify-between ">
        <div className="font-bold text-xl">ABC PVT LTD</div>
        <div className="flex gap-2 items-center">
          <Badge className="p-2">Direct Hire</Badge>
          <Badge className="p-2"> Temporary Hire</Badge>
          <Badge className="p-2"> Part Time Hire</Badge>

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
