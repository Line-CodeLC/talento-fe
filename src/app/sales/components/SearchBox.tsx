"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { FC, useState } from "react";

interface SearchBoxProps {}
const SearchBox: FC<SearchBoxProps> = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="bg-white m-4 flex w-full items-center relative">
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
