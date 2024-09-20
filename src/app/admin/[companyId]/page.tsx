import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      Want to edit your Company
      <Link href="/admin/1/edit">Edit</Link>
    </div>
  );
}

export default page;
