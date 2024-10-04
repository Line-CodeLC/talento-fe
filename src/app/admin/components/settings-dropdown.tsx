"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, LogOutIcon, User } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface SettingsDropdownProps {
  className?: string;
  dashboard: string;
  companyID: string;
}

const SettingsDropdown: FC<SettingsDropdownProps> = ({
  className,
  companyID,
  dashboard,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className={cn("flex items-center", className)}>
          <ChevronDown size={18} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href={`/v/${companyID}/${dashboard}/profile/profile`}>
            <div className="flex space-x-4">
              <User size={18} />
              <p>Profile</p>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex space-x-4">
            <LogOutIcon size={18} />
            Logout
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsDropdown;
