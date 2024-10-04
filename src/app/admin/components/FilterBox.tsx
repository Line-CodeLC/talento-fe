"use client";
import React, { FC } from "react";
import { ChevronDown, ListFilter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterBoxProps {}
const FilterBox: FC<FilterBoxProps> = () => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex  justify-evenly bg-white p-2 w-[200px]">
            <ListFilter />
            Filter
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Filter 1</DropdownMenuItem>
          <DropdownMenuItem>Filter 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterBox;
