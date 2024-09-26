import React from "react";
import resume from "@/assets/resume.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function UnpauseForm() {
  return (
    <div className=" flex flex-col justify-center  w-full  ">
      <Image src={resume} alt="" className="mx-auto" />
      <div className="text-xl font-bold text-center">
        You are about to unpause this Company
      </div>
      <div className="text-[#4B5563]  text-center">
        You will be able to pause it anytime later.
      </div>
      <div className="grid grid-cols-2 mt-5 gap-5">
        <Button className="border border-gray-200 bg-white text-black">
          Cancel
        </Button>
        <Button className="bg-[#10B331]">Confirm</Button>
      </div>
    </div>
  );
}

export default UnpauseForm;
