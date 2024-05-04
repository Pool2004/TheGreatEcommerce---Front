"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "@/components/ItemCard";
import useCategories from "@/customHooks/useCategories";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorySelected, setCategorySelected] = useState(null);
  const { data: categories } = useCategories();

  const fetchData = async () => {
    setLoading(true);
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

  const fetchFilterData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/articulo/categoria/" + categorySelected
      );
      const jsonData = await response.json();
      setItems(jsonData);
    } catch (error) {
      console.error("Error eeee:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const filterItems = (categoryName) => {
    setCategorySelected(categoryName);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (categorySelected !== null) {
      fetchFilterData();
    }
  }, [categorySelected]);

  if (loading) {
    return <h1>....cargando</h1>;
  }

  return (
    <main className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8 lg:py-20">
      <div className="mb-20 bg-gray-500 w-full">
        <h2 className="mb-8">Filtrar articulos</h2>
        <div className="flex justify-between">
          {categories.map((category) => {
            return (
              <button
                key={"category_" + category.id}
                onClick={() => filterItems(category.name)}
                className="flex w-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
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
