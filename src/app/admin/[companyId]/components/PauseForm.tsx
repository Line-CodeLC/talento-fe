import React from "react";
import pause from "@/assets/pause.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function PauseForm() {
  return (
    <div className="flex flex-col">
      <Image src={pause} alt="" className="mx-auto" />
      <div className="text-xl font-bold text-center">
        You are about to pause this Company
      </div>
      <div className="text-[#4B5563] text-center">
        You will be able to unpause it anytime later.
      </div>
      <div className="grid grid-cols-2 mt-5 gap-5">
        <Button className="border border-gray-200 bg-white text-black">
          Cancel
        </Button>
        <Button className="bg-[#4B5563]">Confirm</Button>
      </div>
    </div>
  );
}

export default PauseForm;
