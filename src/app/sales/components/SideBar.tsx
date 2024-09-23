"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import lc_logo from "@/assets/lc_logo.png";
import { Building2, CircleDollarSign, Settings, Target } from "lucide-react";
import { usePathname } from "next/navigation";

interface SideBarProps {}
const SideBar: FC<SideBarProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="p-5 col-span-1 flex flex-col ml-5 gap-7">
      <div>
        <Image src={lc_logo} className="w-32 mt-10" alt="Logo" />
      </div>

      <div
        onClick={() => router.push("/sales")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("/sales") ? "bg-[#E84B01] text-white" : "text-black"
        }`}
      >
        <Building2 />
        Company
      </div>

      <div
        onClick={() => router.push("/sales/target")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("/sales/target") ? "bg-[#E84B01] text-white" : "text-black"
        }`}
      >
        <Target />
        Target
      </div>

      <div
        onClick={() => router.push("/sales/commission")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("/sales/commission")
            ? "bg-[#E84B01] text-white"
            : "text-black"
        }`}
      >
        <CircleDollarSign />
        Commission
      </div>

      <div
        onClick={() => router.push("/sales/settings")}
        className={`flex gap-3 rounded-lg p-3 cursor-pointer ${
          isActive("/sales/settings") ? "bg-[#E84B01] text-white" : "text-black"
        }`}
      >
        <Settings />
        Settings
      </div>
    </div>
  );
};

export default SideBar;
