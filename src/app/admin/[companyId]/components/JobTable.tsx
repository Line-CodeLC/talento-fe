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

function JobTable() {
  return (
    <Table>
      <TableCaption>A list of your Jobs</TableCaption>
      <TableHeader className="bg-[#D1D5DB] ">
        <TableRow className="text-[#202020]">
          <TableHead className="w-[250px] text-[#202020]">Job Name</TableHead>
          <TableHead className="text-[#202020]">Job Type</TableHead>
          <TableHead className="text-[#202020]">Employee Working</TableHead>
          <TableHead className="text-[#202020]">Start Date</TableHead>
          <TableHead className=""></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">23-01-2023</TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">23-01-2023</TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">23-01-2023</TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">23-01-2023</TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">23-01-2023</TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">23-01-2023</TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell>Direct Hire</TableCell>
          <TableCell>25</TableCell>
          <TableCell className="">23-01-2023</TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default JobTable;
