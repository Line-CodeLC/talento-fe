
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";
import React, { FC } from "react";

interface OverviewPageProps {}
const Overview: FC<OverviewPageProps> = () => {
    return(
        <>
        <div className="grid grid-cols-4 gap-4 p-6">
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
        
     
        </>
    );
};

export default Overview; 