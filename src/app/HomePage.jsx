"use client";
import React, { useState, useEffect } from "react";
import items from "../mockdata/items.json";
import ItemCard from "@/components/ItemCard";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setItems(true);
    try {
      const response = await fetch("http://localhost:8080/articulo/get/all");
      const jsonData = await response.json();

      setItems(jsonData);
    } catch (error) {
      console.error("Error eeee:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>....cargando</h1>;
  }
  return (
    <main className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:py-20">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <li key={item.idArticulo}>
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
