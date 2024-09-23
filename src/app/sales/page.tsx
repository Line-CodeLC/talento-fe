"use client";
import React, { FC, useState } from "react";

import CompanyCard from "./components/CompanyCard";

import FilterBox from "./components/FilterBox";
import SearchBox from "./components/SearchBox";
import StatusTabs from "./components/StatusTabs";

interface PageProps {}
const page: FC<PageProps> = () => {
  return (
    <div>
      <StatusTabs />
      <div className="flex items-center">
        <SearchBox />
        <FilterBox />
      </div>

      <div className="flex gap-3 flex-col">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </div>
  );
};

export default page;
