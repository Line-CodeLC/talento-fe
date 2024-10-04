import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, EllipsisVertical } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SearchBox from "../../components/SearchBox";
import { EditCompanyModal } from "../../components/EditCompanyModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import CompanyListCard from "../components/CompanyListCard";
function page() {
  return (
    <div className=" m-5 h-screen">
      <div className="bg-white p-3">
        <div className="flex justify-between mb-5">
          <div className="text-xl font-semibold">Personal Information</div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit information</DropdownMenuItem>

              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
      <div className="bg-white p-3 mt-3">
        <div className="flex justify-between items-center">
          <div className="font-semibold  text-xl">Company List</div>
          <div>
            <EditCompanyModal />
          </div>
        </div>
        <Separator className="mt-5 mb-4" />
        <SearchBox />
        <ScrollArea className="max-h-[500px]  rounded-md border  overflow-y-auto">
          <div className="flex flex-col gap-5">
            {Array.from({ length: 10 }).map((_, idx) => (
              <CompanyListCard key={idx} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default page;
