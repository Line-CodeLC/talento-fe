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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, EllipsisVertical } from "lucide-react";
import React from "react";

function TimeSheetTable() {
  return (
    <Table className="bg-white mt-10 ">
      <TableCaption>A list of your Jobs</TableCaption>
      <TableHeader className="bg-[#D1D5DB] ">
        <TableRow className="text-[#202020]">
          <TableHead className="w-[2 hrs0px] text-[#202020] p-3">
            Start Date
          </TableHead>
          <TableHead className="text-[#202020]">Week</TableHead>
          <TableHead className="text-[#202020]">Total Working Time </TableHead>
          <TableHead className="text-[#202020]">Bill Amount</TableHead>
          <TableHead className=""></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium  p-3">23-06-2023</TableCell>
          <TableCell>23/06/23-30/06/2023</TableCell>
          <TableCell>2 hrs</TableCell>
          <TableCell className="">$ 40</TableCell>
          <TableCell className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium">23-06-2023</TableCell>
          <TableCell>23/06/23-30/06/2023</TableCell>
          <TableCell>2 hrs</TableCell>
          <TableCell className="">$ 40</TableCell>
          <TableCell className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">23-06-2023</TableCell>
          <TableCell>23/06/23-30/06/2023</TableCell>
          <TableCell>2 hrs</TableCell>
          <TableCell className="">$ 40</TableCell>
          <TableCell className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">23-06-2023</TableCell>
          <TableCell>23/06/23-30/06/2023</TableCell>
          <TableCell>2 hrs</TableCell>
          <TableCell className="">$ 40</TableCell>
          <TableCell className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">23-06-2023</TableCell>
          <TableCell>23/06/23-30/06/2023</TableCell>
          <TableCell>2 hrs</TableCell>
          <TableCell className="">$ 40</TableCell>
          <TableCell className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">23-06-2023</TableCell>
          <TableCell>23/06/23-30/06/2023</TableCell>
          <TableCell>2 hrs</TableCell>
          <TableCell className="">$ 40</TableCell>
          <TableCell className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">23-06-2023</TableCell>
          <TableCell>23/06/23-30/06/2023</TableCell>
          <TableCell>2 hrs</TableCell>
          <TableCell className="">$ 40</TableCell>
          <TableCell className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TimeSheetTable;
