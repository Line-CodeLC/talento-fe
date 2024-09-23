import React from "react";
import SideBar from "./components/SideBar";
import Navbar from "@/components/ui/Navbar";

function layout({ children }: { children: any }) {
  return (
    <div className="grid grid-cols-5 ">
      <SideBar />
      <div className="col-span-4 p-2">
        <Navbar />
        <div className="bg-[#F3F4F6] mt-2">{children}</div>
      </div>
    </div>
  );
}

export default layout;
