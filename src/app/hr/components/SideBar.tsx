"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import lc_logo from "@/assets/lc_logo.png";

import {
  BadgeDollarSign,
  BaggageClaimIcon,
  Building2,
  CalendarIcon,
  ChartAreaIcon,
  MessageCircle,
  MessageCircleCode,
  PanelsTopLeft,
  Settings,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface SideBarProps {}
const SideBar: FC<SideBarProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname.includes(path);

  return (
    <div className="p-5 col-span-1 flex flex-col ml-5 gap-7">
      <div>
        <Image src={lc_logo} className="w-48 mt-5" alt="Logo" />
      </div>
      <div
        onClick={() => router.push("/hr/overview")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("overview") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <PanelsTopLeft />
        Overview
      </div>
      <div
        onClick={() => router.push("/hr/jobs")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("jobs") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <BaggageClaimIcon />
        Jobs
      </div>

      <div
        onClick={() => router.push("/hr/chat")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("chat") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <MessageCircle />
        Chat
      </div>

      <div
        onClick={() => router.push("/hr/meetings")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("meetings") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <CalendarIcon />
        Meetings
      </div>
      <div
        onClick={() => router.push("/hr/feedback")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("feedback") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <Settings />
        FeedBack
      </div>
      <div
        onClick={() => router.push("/admin/settings")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("settings") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <Settings />
        Settings
      </div>
    </div>
  );
};

export default SideBar;
