import CustomBadgeStaus from "@/components/Status";
import CustomBadge from "@/components/ui/CustomBadge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import React from "react";

function FeedbackTable() {
  return (
    <Table className="bg-white ">
      <TableCaption>A list of your Jobs</TableCaption>
      <TableHeader className="bg-[#D1D5DB] ">
        <TableRow className="text-[#202020]">
          <TableHead className=" text-[#202020] p-3  w-[400px]">Name</TableHead>
          <TableHead className="text-[#202020] w-[500px]">Status</TableHead>
          <TableHead className="text-[#202020]">Feedback</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium  p-3">Raju Rajeshvari</TableCell>
          <TableCell>
            <CustomBadgeStaus status={false} />
          </TableCell>
          <TableCell>
            <div className="bg-[#10B331] p-3 text-white w-[150px] text-center rounded-lg">
              Register Now
            </div>
          </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>
            <CustomBadgeStaus status={false} />
          </TableCell>
          <TableCell>
            <div className="bg-[#0163E0] p-3 text-white w-[150px] text-center rounded-lg">
              View Feedback
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>
            <CustomBadgeStaus status={false} />
          </TableCell>
          <TableCell>
            <div className="bg-[#0163E0] p-3 text-white w-[150px] text-center rounded-lg">
              View Feedback
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>
            <CustomBadgeStaus status={false} />
          </TableCell>
          <TableCell>
            <div className="bg-[#10B331] p-3 text-white w-[150px] text-center rounded-lg">
              Register Now
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>
            <CustomBadgeStaus status={true} />
          </TableCell>
          <TableCell>
            <div className="bg-[#0163E0] p-3 text-white w-[150px] text-center rounded-lg">
              View Feedback
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>
            <CustomBadgeStaus status={false} />
          </TableCell>
          <TableCell>
            <div className="bg-[#10B331] p-3 text-white w-[150px] text-center rounded-lg">
              Register Now
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>
            <CustomBadgeStaus status={false} />
          </TableCell>
          <TableCell>
            <div className="bg-[#0163E0] p-3 text-white w-[150px] text-center rounded-lg">
              View Feedback
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default FeedbackTable;
