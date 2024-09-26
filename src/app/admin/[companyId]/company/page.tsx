"use client";
import CustomBadge from "@/components/ui/CustomBadge";
import { HandCoins, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, EllipsisVertical } from "lucide-react";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import JobTable from "../components/JobTable";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EditCompanyForm } from "../components/EditCompanyForm";
import PauseForm from "../components/PauseForm";
import { ChangeHrForm } from "../components/ChangeHrForm";
function page() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleModalOpen = (content: string) => {
    setModalContent(content);
  };
  const renderModalContent = () => {
    switch (modalContent) {
      case "edit":
        return (
          <DialogHeader>
            <EditCompanyForm />
          </DialogHeader>
        );
      case "pause":
        return (
          <DialogHeader>
            <PauseForm />
          </DialogHeader>
        );
      case "hr":
        return <ChangeHrForm />;
    }
  };
  return (
    <div className="  m-6 mt-">
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
              <DropdownMenuItem onClick={() => handleModalOpen("edit")}>
                Edit information
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleModalOpen("pause")}>
                Pause
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleModalOpen("hr")}>
                Change HR
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleModalOpen("pause")}>
                Delete
              </DropdownMenuItem>
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
      <div className=" bg-white p-5 mt-5 mb-5">
        <div className="flex justify-between mb-5">
          <div className="text-2xl font-semibold">Agreement Details</div>
          <div className="flex gap-5 items-center">
            <div className="border border-gray-300 p-3 rounded-xl cursor-pointer">
              Start New Agreement
            </div>
            <div className="bg-companyblue p-3 flex gap-2  text-sm cursor-pointer text-white items-center w-[200px] rounded-xl">
              <div>Download Agreement</div>
              <ArrowDownToLine />
            </div>
          </div>
        </div>
        <Separator className="mt-2 mb-4" />
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-5">
            <div>
              <div className="text-textgray"> Job Type</div>
              <div className="font-semibold">Direct Hire</div>
            </div>
            <div>
              <div className="text-textgray">Pay Rate</div>
              <div className="font-semibold">Direct Hire</div>
            </div>
            <div>
              <div className="text-textgray">Bill Rate</div>
              <div className="font-semibold">$10/Hour</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <div className="text-textgray"> Job Type</div>
              <div className="font-semibold">Direct Hire</div>
            </div>
            <div>
              <div className="text-textgray">Pay Rate</div>
              <div className="font-semibold">Direct Hire</div>
            </div>
            <div>
              <div className="text-textgray">Bill Rate</div>
              <div className="font-semibold">$10/Hour</div>
            </div>
          </div>
        </div>
      </div>
      {modalContent && (
        <Dialog
          open={!!modalContent}
          onOpenChange={(open) => !open && setModalContent(null)}
        >
          <DialogContent className="sm:max-w-[725px] max-h-[700px]">
            {renderModalContent()}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default page;
