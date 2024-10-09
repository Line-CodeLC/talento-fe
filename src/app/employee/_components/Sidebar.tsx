"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import lc_logo from "@/assets/lc_logo.png";
import {
  Building2,
  CalendarDays,
  CircleDollarSign,
  ContainerIcon,
  MessageCircle,
  NotepadText,
  Presentation,
  Settings,
  Target,
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
        onClick={() => router.push("/employee/connect")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("connect") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <ContainerIcon />
        Connect
      </div>

      <div
        onClick={() => router.push("/employee/chat")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("chat") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <MessageCircle />
        Chats
      </div>

      <div
        onClick={() => router.push("/chat/meetings")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("meetings") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <Presentation />
        Meetings
      </div>

      <div
        onClick={() => router.push("/employee/jobs")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("jobs") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <CalendarDays />
        Jobs
      </div>
      <div
        onClick={() => router.push("/employee/timesheet")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("timesheet") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <NotepadText />
        Time sheet
      </div>
      <div
        onClick={() => router.push("/employee/settings")}
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
