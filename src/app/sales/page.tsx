"use client";
import React, { FC } from "react";

import CompanyCard from "./components/CompanyCard";
import FilterBox from "./components/FilterBox";
import SearchBox from "./components/SearchBox";
import StatusTabs from "./components/StatusTabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PageProps {}
const Page: FC<PageProps> = () => {
  return (
    <div className="max-w-7xl">
      <StatusTabs />
      <div className="flex items-center mb-4">
        <SearchBox />
        <FilterBox />
      </div>

      <ScrollArea className="max-h-[500px]  rounded-md border p-4 overflow-y-auto">
        <div className="flex flex-col gap-5">
          {Array.from({ length: 10 }).map((_, idx) => (
            <CompanyCard key={idx} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Page;
