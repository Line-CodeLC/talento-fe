import React, { FC, useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, EllipsisVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CustomBadge from "@/components/ui/CustomBadge";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface JobCardProps {}

const JobCard: FC<JobCardProps> = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleModalOpen = (content: string) => {
    setModalContent(content);
  };

  //   const renderModalContent = () => {
  //     switch (modalContent) {
  //       case "View":
  //         return (
  //           <div>
  //             <p>Company Information:</p>

  //             <div>Name: ABC PVT LTD</div>
  //             <div>Onboard Date: 12-06-2023</div>
  //             <div>HR Allocated: Jimmy Kim</div>
  //           </div>
  //         );
  //       case "Pause":
  //         return (
  //           <div>
  //             <PauseForm />
  //           </div>
  //         );
  //       case "Change HR":
  //         return (
  //           <div>
  //             <DialogHeader>
  //               <DialogTitle className="text-center mb-5">Change HR</DialogTitle>
  //             </DialogHeader>
  //             <ChangeHrForm />
  //           </div>
  //         );
  //       case "Delete":
  //         return (
  //           <div>
  //             <DeleteCompany />
  //           </div>
  //         );
  //       default:
  //         return null;
  //     }
  //   };

  return (
    <div className="bg-white p-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div className="font-bold text-xl">Driver</div>
        </div>
        <div className="flex gap-2 items-center">
          <Badge className="p-2 rounded-3xl bg-badge">Part Time Hire</Badge>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleModalOpen("View")}>
                View
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleModalOpen("Pause")}>
                Pause
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleModalOpen("Change HR")}>
                Change HR
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleModalOpen("Delete")}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator className="mt-2 mb-4" />
      <div className="grid grid-cols-4 p-3">
        <div>
          <div className="text-[#4B5563]">Posting Date</div>
          <div className="font-semibold">12-06-2023</div>
        </div>
        <div>
          <div className="text-[#4B5563]">Posted By</div>
          <div className="font-semibold">ABC Logistics</div>
        </div>
        <div>
          <div className="text-[#4B5563]">Requirement</div>
          <div className="font-semibold">6</div>
        </div>
        <div>
          <div className="text-[#4B5563]">Shift</div>
          <div className="font-semibold">Night Shift</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
