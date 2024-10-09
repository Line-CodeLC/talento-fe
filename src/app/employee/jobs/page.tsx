"use client";
import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

import SearchBox from "@/app/admin/components/SearchBox";
import FilterBox from "@/app/admin/components/FilterBox";
import JobCard from "./_components/JobCard";
import StatusTabs from "@/app/hr/components/StatusTabs";
import { Button } from "@/components/ui/button";

function Company() {
  return (
    <div className=" max-w-6xl p-4">
      <div className="flex justify-between">
        <StatusTabs />
        <Button className="bg-companyblue p-6">Create New Job</Button>
      </div>
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
