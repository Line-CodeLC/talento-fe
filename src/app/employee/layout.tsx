import React from "react";
import Navbar from "@/components/ui/Navbar";
import SideBar from "./_components/Sidebar";

function layout({ children }: { children: any }) {
  return (
    <div className="grid grid-cols-5 ">
      <SideBar />
      <div className="col-span-4 p-2">
        <Navbar />
        <div className="bg-[#F3F4F6] pt-3">{children}</div>
      </div>
    </div>
  );
}

export default layout;
