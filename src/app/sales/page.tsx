import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";

interface PageProps {}
const page: FC<PageProps> = () => {
  return (
    <div>
      Sales Page
      <Button>
        <Link href="/sales/add-company">Add Company</Link>
      </Button>
    </div>
  );
};

export default page;
