import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

function FavoriteCard() {
  return (
    <div className="">
      <div className="bg-white     p-4">
        <div className="flex justify-between items-center gap-4 ">
          <div className="flex gap-3">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg/768px-Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg.png"
              alt=""
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <span className="font-semibold">Paulo Green</span>
              <div className="text-[#94A3B8] text-sm">Truck Driver</div>
            </div>
          </div>
          <Badge className="bg-green-500 rounded-3xl h-6 flex items-center justify-center">
            99 % Compatible
          </Badge>
        </div>
        <Separator className="mt-2 mb-4" />
        <div className="flex justify-between">
          <div>5 + years</div>
          <div>Graduation</div>
          <div>Torronto, Ontario</div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
