import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";
import { AddCompanyModal } from "./components/AddCompanyModal";

interface PageProps {}
const page: FC<PageProps> = () => {
  return (
    <div>
      Sales Page
      <AddCompanyModal />
    </div>
  );
};

export default page;
