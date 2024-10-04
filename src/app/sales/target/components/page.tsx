import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
function TargetTable() {
  return (
    <Table className="bg-white p-3 ">
      <TableCaption>A list of your Jobs</TableCaption>
      <TableHeader className="bg-[#D1D5DB] p-6 ">
        <TableRow className="text-[#202020] p-6">
          <TableHead className="w-[250px] text-[#202020] p-6">Date</TableHead>
          <TableHead className="text-[#202020]">Employee Progress</TableHead>
          <TableHead className="text-[#202020]">Company Progress</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="p-3">
          <TableCell className="font-medium p-6">January 2023</TableCell>
          <TableCell>8/12</TableCell>
          <TableCell>9/16 </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-6">January 2023</TableCell>
          <TableCell>8/12</TableCell>
          <TableCell>9/16 </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-6">January 2023</TableCell>
          <TableCell>8/12</TableCell>
          <TableCell>9/16 </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-6">January 2023</TableCell>
          <TableCell>8/12</TableCell>
          <TableCell>9/16 </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-6">January 2023</TableCell>
          <TableCell>8/12</TableCell>
          <TableCell>9/16 </TableCell>
        </TableRow>{" "}
      </TableBody>
    </Table>
  );
}

export default TargetTable;
