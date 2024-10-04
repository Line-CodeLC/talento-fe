"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import lc_logo from "@/assets/lc_logo.png";

import {
  BadgeDollarSign,
  Building2,
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
        onClick={() => router.push("/admin/overview")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("overview") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <PanelsTopLeft />
        Overview
      </div>
      <div
        onClick={() => router.push("/admin/company")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("company") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <Building2 />
        Company
      </div>

      <div
        onClick={() => router.push("/admin/sales")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("sales") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <BadgeDollarSign />
        Sales
      </div>

      <div
        onClick={() => router.push("/admin/hr")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("hr") ? "bg-companyblue text-white" : "text-black"
        }`}
      >
        <Users />
        HR
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
