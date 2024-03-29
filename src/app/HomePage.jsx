"use client";
import React from "react";
import items from "../mockdata/items.json";
import ItemCard from "@/components/ItemCard";

const HomePage = () => {
  return (
    <main>
      <ul>
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
