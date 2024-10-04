import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { FC } from "react";
interface EmployeeListPageProps {}
const EmployeeListTable: FC<EmployeeListPageProps> = () => {
  return (
    <Table className="bg-white">
      <TableHeader className="bg-[#D1D5DB]  p-2 ">
        <TableRow className="text-[#202020]  p-2">
          <TableHead className="w-[250px] text-[#202020]  p-3">
            Employee Name
          </TableHead>
          <TableHead className="text-[#202020]">Service</TableHead>
          <TableHead className="text-[#202020]"> Working Hours</TableHead>
          <TableHead className="text-[#202020]">Commision</TableHead>
          <TableHead className=""></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        <TableRow>
          <TableCell className="font-medium p-3">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">$35</TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-3">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">$35</TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-3">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">$35</TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-3">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">$35</TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-3">Alex Wilton</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">$35</TableCell>
        </TableRow>{" "}
      </TableBody>
    </Table>
  );
};

export default EmployeeListTable;
