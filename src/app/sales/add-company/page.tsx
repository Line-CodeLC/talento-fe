import React, { FC } from "react";
import { AddCompanyForm } from "../components/AddCompanyForm";
interface PageProps {}
const page: FC<PageProps> = () => {
  return (
    <div className="p-10">
      <AddCompanyForm />
    </div>
  );
};

export default page;
