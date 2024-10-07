"use client";
import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

import SearchBox from "@/app/admin/components/SearchBox";
import FilterBox from "@/app/admin/components/FilterBox";
import JobCard from "./_components/JobCard";
import StatusTabs from "../components/StatusTabs";

function Company() {
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
            <JobCard key={idx} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Company;
