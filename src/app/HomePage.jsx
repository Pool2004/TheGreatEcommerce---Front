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

      setTimeout(() => {
        setItems(jsonData);
        setLoading(false);
      }, "500");
    } catch (error) {
      console.error("Error eeee:", error);
      setItems([]);
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
      setTimeout(() => {
        setItems(jsonData);
        setLoading(false);
      }, "500");
    } catch (error) {
      console.error("Error eeee:", error);
      setItems([]);
      setLoading(false);
    }
  };

  const filterItems = (categoryName) => {
    if (categoryName === categorySelected) {
      setCategorySelected(null);
    } else {
      setCategorySelected(categoryName);
    }
  };

  useEffect(() => {
    if (categorySelected !== null) {
      fetchFilterData();
    } else {
      fetchData();
    }
  }, [categorySelected]);

  return (
    <main className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8 lg:py-20">
      <div className="mb-20 w-full">
        <h2 className="text-base font-semibold leading-7 text-gray-900 mb-8">
          Filtrar articulos
        </h2>
        <div className="flex justify-between">
          {categories.map((category) => {
            return (
              <button
                key={"category_" + category.id}
                onClick={() => filterItems(category.name)}
                className={
                  "flex w-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" +
                  (categorySelected === category.name
                    ? " bg-indigo-950 hover:bg-indigo-800"
                    : "")
                }
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
      {loading ? (
        <h1 className="w-full text-center">Cargando los articulos ...</h1>
      ) : (
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <li key={item.idArticulo}>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default HomePage;
