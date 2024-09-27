"use client";
import React, { FC } from "react";

import CompanyCard from "./components/CompanyCard";
import FilterBox from "./components/FilterBox";
import SearchBox from "./components/SearchBox";
import StatusTabs from "./components/StatusTabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PageProps {}
const Sales: FC<PageProps> = () => {
  return (
    <div className=" max-w-6xl p-4">
      <StatusTabs />
      <div className="flex items-center gap-5">
        <SearchBox />
        <FilterBox />
      </div>

      <ScrollArea className="max-h-[500px]  rounded-md border  overflow-y-auto">
        <div className="flex flex-col gap-5">
          {Array.from({ length: 10 }).map((_, idx) => (
            <CompanyCard key={idx} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sales;
