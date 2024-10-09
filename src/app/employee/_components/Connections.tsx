import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Connections() {
  return (
    <div className="h-screen m-5 ">
      <div className="text-2xl font-semibold mb-5">Select Job Title</div>
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-white p-4  rounded-xl flex justify-between">
          Driver
          <Link href="/employee/connect/1">
            {" "}
            <ArrowRight className="text-blue-500" />
          </Link>
        </div>
        <div className="bg-white p-4  rounded-xl flex justify-between">
          Driver
          <Link href="/employee/connect/1">
            {" "}
            <ArrowRight className="text-blue-500" />
          </Link>
        </div>
        <div className="bg-white p-4  rounded-xl flex justify-between">
          Driver
          <Link href="/employee/connect/1">
            {" "}
            <ArrowRight className="text-blue-500" />
          </Link>
        </div>
        <div className="bg-white p-4  rounded-xl flex justify-between">
          Driver
          <Link href="/employee/connect/1">
            {" "}
            <ArrowRight className="text-blue-500" />
          </Link>
        </div>
        <div className="bg-white p-4  rounded-xl flex justify-between">
          Driver
          <Link href="/employee/connect/1">
            {" "}
            <ArrowRight className="text-blue-500" />
          </Link>
        </div>
        <div className="bg-white p-4  rounded-xl flex justify-between">
          Driver
          <Link href="/employee/connect/1">
            {" "}
            <ArrowRight className="text-blue-500" />
          </Link>
        </div>
        <div className="bg-white p-4  rounded-xl flex justify-between">
          Driver
          <Link href="/employee/connect/1">
            {" "}
            <ArrowRight className="text-blue-500" />
          </Link>
        </div>
        <div className="bg-white p-4  rounded-xl flex justify-between">
          Driver
          <Link href="/employee/connect/1">
            {" "}
            <ArrowRight className="text-blue-500" />
          </Link>
        </div>
        <div className="bg-white p-4  rounded-xl flex justify-between">
          Driver
          <Link href="/employee/connect/1">
            {" "}
            <ArrowRight className="text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Connections;
