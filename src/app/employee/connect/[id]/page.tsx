import React from "react";
import ui from "@/assets/ui.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className="h-full m-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Driver </div>
        <Link href="/employee/connect/favourites">
          <Button className="bg-companyblue p-6 flex gap-2">
            {" "}
            <Heart />
            Favorites
          </Button>
        </Link>
      </div>
      <div className="p-2 bg-white mt-5">
        <Image src={ui} alt="" />
      </div>
      <div className="mt-5 bg-white p-6">
        <div className="flex justify-between ">
          <div className="text-2xl font-semibold">Paulo Green 29</div>
          <Badge className="bg-green-500 rounded-3xl">99 % Compatible</Badge>
        </div>
        <Separator className="mt-2 mb-4" />
        <div className="text-[#64748B]">Basic Information</div>
        <div className="text-[#64748B] mt-2">
          Lorem ipsum dolor sit amet. Rem voluptas quidem qui deleniti
          voluptatem est reprehenderit excepturi non quas quia.
        </div>
        <div className="mt-4 flex gap-3 mb-6">
          <div className="border flex justify-between w-1/3 border-[#F1F5F9] p-3">
            <div className="text-[#64748B]">Experience</div>
            <div className="font-semibold">5 + Years</div>
          </div>
          <div className="border flex justify-between w-1/3 border-[#F1F5F9] p-3">
            <div className="text-[#64748B]">Highest Qualification</div>
            <div className="font-semibold">Graduate</div>
          </div>

          <div className="border flex justify-between w-1/3 border-[#F1F5F9] p-3">
            <div className="text-[#64748B]">Location</div>
            <div className="font-semibold">Toronto</div>
          </div>
        </div>
        <Separator className="mt-2 mb-4" />

        <div>
          <div className="text-[#64748B]">Answers by the Candidate</div>
          <div className="flex mt-3 gap-5">
            <div className="bg-[#22C55E] p-4 w-[200px] rounded-xl cursor-pointer  font-bold text-center text-white">
              Agree
            </div>
            <div className="bg-[#F8F8F8] p-4 text-[#FF3B30]  rounded-xl cursor-pointer  font-bold w-[200px] text-center">
              Disagree
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-4 mt-5 rounded-2xl">
            <div>Lorem ipsum dolor sit amet? </div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-4 mt-5 rounded-2xl">
            <div>Lorem ipsum dolor sit amet? </div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-4 mt-5 rounded-2xl">
            <div>Lorem ipsum dolor sit amet? </div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-4 mt-5 rounded-2xl">
            <div>Lorem ipsum dolor sit amet? </div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
          <div className="border border-[#F1F5F9] p-4 mt-5 rounded-2xl">
            <div>Lorem ipsum dolor sit amet? </div>
            <div className="font-semibold">
              Et odio veniam eos rerum omnis est galisum tempora et ducimus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
