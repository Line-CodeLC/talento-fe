"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { FC, useState } from "react";

interface SearchBoxProps {}
const SearchBox: FC<SearchBoxProps> = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="bg-white mt-4 mb-5 flex w-[80%]  items-center relative">
      <div className="absolute left-3">
        <Search />
      </div>
      <Input
        type="email"
        value={email}
        placeholder="Search a Company"
        onChange={(e) => setEmail(e.target.value)}
        className="pl-10 h-10"
      />
    </div>
  );
};

export default SearchBox;
