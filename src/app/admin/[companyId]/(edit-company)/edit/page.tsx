import Link from "next/link";
import React from "react";
import { EditCompanyForm } from "../components/AddCompanyForm";

function page() {
  return (
    <div className="p-10">
      <EditCompanyForm />
    </div>
  );
}

export default page;
