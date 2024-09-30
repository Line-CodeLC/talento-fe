
import { Badge } from "@/components/ui/badge";
import { ArrowUp, DollarSign } from "lucide-react";
import React, { FC } from "react";

interface OverviewPageProps {}
const Overview: FC<OverviewPageProps> = () => {
    return(
        <>
        <div className="p-6 flex flex-col gap-4">  
        <div className="grid grid-cols-4 gap-4 ">
        <div className="bg-white border rounded-2xl p-4">
        <div className="flex flex-col space-y-4">
             <h1>Total Companies</h1>
             <div className="flex justify-between text-4xl">
                2420
                <div className="rounded-full"> 
                </div>
             </div>
        </div>          
        </div>
        <div className="bg-white border rounded-2xl p-4">
           <div className="flex flex-col space-y-4">
             <h1>Total Companies</h1>
             <div className="flex justify-between text-4xl">
                2420
                <div className="rounded-full"> 
                </div>
             </div>
           </div>
           
        </div>
        <div className="bg-white border rounded-2xl p-4">
           <div className="flex flex-col space-y-4">
             <h1>Total Companies</h1>
             <div className="flex justify-between text-4xl">
                2420
                <div className="rounded-full"> 
                </div>
             </div>
           </div>
           
        </div>
        <div className="bg-white border rounded-2xl p-4">
           <div className="flex flex-col space-y-4">
             <h1>Total Companies</h1>
             <div className="flex justify-between text-4xl">
                2420
                <div className="rounded-full"> 
                </div>
             </div>
           </div>
           
        </div>
        </div>
        <div className="bg-white grid grid-cols-4 gap-4 p-4 border rounded-2xl">
            <div className="col-span-3">
               <div className="flex flex-col space-y-4">
                <div className="font-semibold text-2xl">
                  Profit
                </div>
                <div className="flex gap-2">
                   <DollarSign className="w-4 h-8 " /> <div className="font-semibold text-4xl">1800</div>
                </div>
               </div>
            </div>
            <div className="cols-span-1">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">    
                <div className="font-light text-gray-400">
                        Bill Account
                </div> 
                <div className="font-bold text-4xl">
                     4820
                </div>
                </div>
                <div className="flex flex-col">    
                <div className="font-light text-gray-400">
                        Bill Account
                </div> 
                <div className="font-bold text-4xl">
                     4820
                </div>
                </div>
                <div className="flex flex-col">    
                <div className="font-light text-gray-400">
                        Bill Account
                </div> 
                <div className="font-bold text-4xl">
                     4820
                </div>
                </div>
                <div className="flex flex-col">    
                <div className="font-light text-gray-400">
                        Bill Account
                </div> 
                <div className="font-bold text-4xl">
                     4820
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Overview; 