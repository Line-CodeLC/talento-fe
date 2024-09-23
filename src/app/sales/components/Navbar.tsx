import UserHeaderTag from "@/components/ui/user-header-tag";
import { Bell } from "lucide-react";
import React, { FC } from "react";
import SettingsDropdown from "./settings-dropdown";
interface PageProps {}
const Navbar: FC<PageProps> = () => {
  return (
    <div className="flex justify-between items-center ml-3 mr-10 mt-4">
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
