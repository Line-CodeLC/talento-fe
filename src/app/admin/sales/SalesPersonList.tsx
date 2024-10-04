import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import SalesPeronCard from "./components/SalesPeronCard";
import { ScrollArea } from "@radix-ui/react-scroll-area";

function SalesPersonList() {
  return (
    <div className="h-screen">
      <div className="m-4">
        <div className="flex justify-between">
          <div className="font-semibold text-2xl">SalesPerson List</div>
          <div className="bg-companyblue cursor-pointer rounded-lg text-sm text-white p-2 flex items-center">
            Add New Salesperson
          </div>
        </div>
        <div className="flex items-center gap-5">
          <SearchBox />
          <FilterBox />
        </div>
        <ScrollArea className="max-h-[500px]  rounded-md border  overflow-y-auto">
          <div className="flex flex-col gap-5">
            {Array.from({ length: 10 }).map((_, idx) => (
              <SalesPeronCard key={idx} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default SalesPersonList;
