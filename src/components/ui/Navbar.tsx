import SettingsDropdown from "@/app/sales/components/settings-dropdown";
import UserHeaderTag from "@/components/ui/user-header-tag";
import { Bell } from "lucide-react";
import React, { FC } from "react";

interface PageProps {}
const Navbar: FC<PageProps> = () => {
  return (
    <div className="flex justify-between items-center p-4 max-w-8xl">
      <div className="text-2xl font-semibold">Company</div>
      <div className="flex items-center space-x-4">
        <Bell />

        <UserHeaderTag
          user={{
            lastName: "Banerjee",
            firstName: "Ankush Banerjee",
            profilePicture: "",
          }}
          role="Admin"
        />
        <SettingsDropdown companyID={""} dashboard="Admin" className="h-full" />
      </div>
    </div>
  );
};

export default Navbar;
