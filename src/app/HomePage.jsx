"use client";
import React from "react";
import items from "../mockdata/items.json";
import ItemCard from "@/components/ItemCard";

const HomePage = () => {
  return (
    <main className="p-6">
      <ul class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
