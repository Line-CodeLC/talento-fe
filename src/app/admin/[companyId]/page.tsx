import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { EditCompanyModal } from "./(edit-company)/components/EditCompanyModal";

function page() {
  return (
    <div>
      Want to edit your Company
      <EditCompanyModal />
    </div>
  );
}

export default page;
