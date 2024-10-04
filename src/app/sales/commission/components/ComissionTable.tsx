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
import Link from "next/link";
import { ExternalLink } from "lucide-react";
function ComissionTable() {
  return (
    <Table className="bg-white p-3 ">
      <TableHeader className="bg-[#D1D5DB] p-6 ">
        <TableRow className="text-[#202020] p-6">
          <TableHead className="w-[250px] text-[#202020] p-6">
            Company Name
          </TableHead>
          <TableHead className="text-[#202020]">Working Hours</TableHead>
          <TableHead className="text-[#202020]">Comission</TableHead>
          <TableHead className="text-[#202020]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="p-3">
          <TableCell className="font-medium p-6">ABC PVT LTD</TableCell>
          <TableCell>25</TableCell>
          <TableCell>$ 25 </TableCell>
          <TableCell className="">
            <Link href="/sales/company/1/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-6">ABC PVT LTD</TableCell>
          <TableCell>25</TableCell>
          <TableCell>$ 25 </TableCell>
          <TableCell className="">
            <Link href="/sales/company/1/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-6">ABC PVT LTD</TableCell>
          <TableCell>25</TableCell>
          <TableCell>$ 25 </TableCell>
          <TableCell className="">
            <Link href="/sales/company/1/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium p-6">ABC PVT LTD</TableCell>
          <TableCell>25</TableCell>
          <TableCell>$ 25 </TableCell>
          <TableCell className="">
            <Link href="/sales/company/1/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>{" "}
      </TableBody>
    </Table>
  );
}

export default ComissionTable;
TableRow;
