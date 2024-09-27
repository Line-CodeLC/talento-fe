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

function SalesTable() {
  return (
    <Table>
      <TableCaption>A list of your Jobs</TableCaption>
      <TableHeader className="bg-[#D1D5DB] ">
        <TableRow className="text-[#202020]">
          <TableHead className="w-[250px] text-[#202020]">Job Name</TableHead>
          <TableHead className="text-[#202020]">Allocated Date</TableHead>
          <TableHead className="text-[#202020]">Selected Services</TableHead>

          <TableHead className=""></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell className="font-medium">23-01-2023</TableCell>
          <TableCell className="font-medium">
            Direct Hire, Temporary Hire, Part Time Hire, Permanent Hire
          </TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell className="font-medium">23-01-2023</TableCell>
          <TableCell className="font-medium">
            Direct Hire, Temporary Hire, Part Time Hire, Permanent Hire
          </TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell className="font-medium">23-01-2023</TableCell>
          <TableCell className="font-medium">
            Direct Hire, Temporary Hire, Part Time Hire, Permanent Hire
          </TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell className="font-medium">23-01-2023</TableCell>
          <TableCell className="font-medium">
            Direct Hire, Temporary Hire, Part Time Hire, Permanent Hire
          </TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell className="font-medium">23-01-2023</TableCell>
          <TableCell className="font-medium">
            Direct Hire, Temporary Hire, Part Time Hire, Permanent Hire
          </TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell className="font-medium">23-01-2023</TableCell>
          <TableCell className="font-medium">
            Direct Hire, Temporary Hire, Part Time Hire, Permanent Hire
          </TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell className="font-medium">23-01-2023</TableCell>
          <TableCell className="font-medium">
            Direct Hire, Temporary Hire, Part Time Hire, Permanent Hire
          </TableCell>
          <TableCell className="">
            <Link href="/admin/1/company/job-details">
              <ExternalLink />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Driver</TableCell>
          <TableCell className="font-medium">23-01-2023</TableCell>
          <TableCell className="font-medium">
            Direct Hire, Temporary Hire, Part Time Hire, Permanent Hire
          </TableCell>
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

export default SalesTable;
