import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PageProps {}
const CommissionDetailsTable: FC<PageProps> = () => {
  return (
    <Table className="bg-white p-3 ">
      <TableHeader className="bg-[#D1D5DB] p-6 ">
        <TableRow className="text-[#202020] p-6">
          <TableHead className="w-[250px] text-[#202020] p-6">
            Employee Name
          </TableHead>
          <TableHead className="text-[#202020]">Service</TableHead>
          <TableHead className="text-[#202020]">Working Hours</TableHead>
          <TableHead className="text-[#202020]">Commission</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="p-3">
          <TableCell className="font-medium p-6">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell> 25 </TableCell>
          <TableCell>$ 25 </TableCell>
        </TableRow>{" "}
        <TableRow className="p-3">
          <TableCell className="font-medium p-6">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell> 25 </TableCell>
          <TableCell>$ 25 </TableCell>
        </TableRow>{" "}
        <TableRow className="p-3">
          <TableCell className="font-medium p-6">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell> 25 </TableCell>
          <TableCell>$ 25 </TableCell>
        </TableRow>{" "}
        <TableRow className="p-3">
          <TableCell className="font-medium p-6">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell> 25 </TableCell>
          <TableCell>$ 25 </TableCell>
        </TableRow>{" "}
        <TableRow className="p-3">
          <TableCell className="font-medium p-6">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell> 25 </TableCell>
          <TableCell>$ 25 </TableCell>
        </TableRow>{" "}
      </TableBody>
    </Table>
  );
};

export default CommissionDetailsTable;
