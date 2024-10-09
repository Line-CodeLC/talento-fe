import React from "react";
import FavoriteCard from "../../_components/FavoriteCard";

function page() {
  return (
    <div className="h-screen m-5">
      <div className="text-2xl font-semibold mb-4">Favorites</div>
      <div className="grid grid-cols-2 gap-4">
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
      </div>
    </div>
  );
}

export default page;
