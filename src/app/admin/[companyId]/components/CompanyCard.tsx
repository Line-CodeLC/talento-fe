import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, EllipsisVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CustomBadge from "@/components/ui/CustomBadge";

interface CompanyCardProps {}
const CompanyCard: FC<CompanyCardProps> = () => {
  return (
    <div className="bg-white p-5 ">
      <div className="flex justify-between ">
        <div className="flex gap-5 items-center">
          <div className="font-bold text-xl">ABC PVT LTD</div>
          <CustomBadge status={false} />
        </div>
        <div className="flex gap-2 items-center">
          <Badge className="p-2 rounded-3xl bg-badge">Direct Hire</Badge>
          <Badge className="p-2 rounded-3xl bg-badge"> Temporary Hire</Badge>
          <Badge className="p-2 rounded-3xl bg-badge"> Part Time Hire</Badge>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>View</DropdownMenuItem>
              <DropdownMenuItem>Pause</DropdownMenuItem>
              <DropdownMenuItem>Change HR</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator className="mt-2 mb-4" />
      <div className="grid grid-cols-4 p-3">
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
        <div className="bg-companyblue p-3 flex gap-2 cursor-pointer text-white items-center w-[220px] rounded-xl">
          <div>Download Agreement</div>
          <ArrowDownToLine />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
