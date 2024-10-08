import React from "react";
import FeedbackTable from "./_components/FeedbackTable";

function page() {
  return (
    <div className="h-screen m-5">
      <div className="font-bold text-2xl mb-5"> Driver-ABC Enterprise</div>
      <FeedbackTable />
    </div>
  );
}

export default page;
