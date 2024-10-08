"use client";
import React from "react";
import JobCard from "../_components/JobCard";
import { Separator } from "@/components/ui/separator";
import StatusTabs from "../../components/StatusTabs";
import SearchBox from "@/app/admin/components/SearchBox";
import FilterBox from "@/app/admin/components/FilterBox";
import JobTable from "../_components/JobTable";

function page() {
  return (
    <div className="h-full m-4">
      <div>
        <JobCard />
      </div>
      <div className="bg-white p-5 mt-4 ">
        <div className="font-bold text-xl mb-7">Job Description</div>
        <Separator className="mt-2 mb-4" />
        <div className="mb-10 text-[#4B5563]">
          The Job Description comes here, Some quick example text to build on
          the card title and make up the bulk of the card's content. The Job
          Description comes here, Some quick example text to build on the card
          title and make up the bulk of the card's content.The Job Description
          comes here, Some quick example text to build on the card title and
          make up the bulk of the card's content.The Job Description comes here,
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </div>
        <Separator className="mt-2 mb-4" />
        <div className="mt-4">
          <div className="text-[#64748B] mb-10">Additional Requirements</div>
        </div>
        <Separator className="mt-2 mb-4" />
        <div className="text-[#64748B]">Answers by the Employers</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-[#F1F5F9] p-2 rounded-2xl">
            <div className="text-[#64748B]">Lorem ipsum dolor sit amet?</div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-2 rounded-2xl">
            <div className="text-[#64748B]">Lorem ipsum dolor sit amet?</div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-2 rounded-2xl">
            <div className="text-[#64748B]">Lorem ipsum dolor sit amet?</div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-2 rounded-2xl">
            <div className="text-[#64748B]">Lorem ipsum dolor sit amet?</div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-2 rounded-2xl">
            <div className="text-[#64748B]">Lorem ipsum dolor sit amet?</div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-2 rounded-2xl">
            <div className="text-[#64748B]">Lorem ipsum dolor sit amet?</div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-4 bg-white">
        <div className="font-semibold text-xl mb-4">Candidates</div>
        <div>
          <StatusTabs />
        </div>
        <div className="flex items-center gap-5">
          <SearchBox />
          <FilterBox />
        </div>
        <JobTable />
      </div>
    </div>
  );
}

export default page;
