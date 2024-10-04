"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import deleteimg from "@/assets/delete.png";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

function DeleteCompany() {
  const [val, setval] = useState("");
  return (
    <div className=" flex flex-col gap-3 justify-center  ">
      <Image src={deleteimg} alt="" className="mx-auto" />
      <div className="font-bold  text-2xl text-center">
        You are about to Delete this company
      </div>
      <div className="text-[#4B5563] text-xl  text-center">
        You want to delete this company
        <div>Are you sure?</div>
      </div>
      <Separator className="mt-2 mb-4" />
      <div className="grid grid-cols-3 justify-center mx-auto">
        <div className="font-medium">ABC PVT LTD</div>
        <div>+234903456771</div>
        <div>example@gmail.com</div>
      </div>
      <div className=" ml-24 ">
        <div className="font-semibold mb-3">Type "Yes" to confirm</div>
        <Input onChange={(e) => setval(e.target.value)} value={val} />
      </div>
      <div className="grid grid-cols-2 mt-5 gap-5">
        <Button className="border border-gray-200 bg-white text-black">
          Cancel
        </Button>
        <Button className="bg-[#F31A1A]" disabled={"Yes" != val}>
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default DeleteCompany;
