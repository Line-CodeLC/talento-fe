"use client";
import React, { FC } from "react";

import CompanyCard from "./components/CompanyCard";
import FilterBox from "./components/FilterBox";
import SearchBox from "./components/SearchBox";
import StatusTabs from "./components/StatusTabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PageProps {}
const Page: FC<PageProps> = () => {
  return (
    <div>
      <StatusTabs />
      <div className="flex items-center mb-4">
        <SearchBox />
        <FilterBox />
      </div>

      <ScrollArea className="max-h-[500px] w-full md:max-w-8xl rounded-md border p-4 overflow-y-auto">
        {Array.from({ length: 10 }).map((_, idx) => (
          <CompanyCard key={idx} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default Page;
