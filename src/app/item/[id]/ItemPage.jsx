"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { addToCart } from "@/redux/slice/cartSlice";
import { getCategoryLabel, getPriceInCOP } from "@/utils/utils";

const ItemPage = ({ id }) => {
  const [item, setItem] = useState(null);

  const dispatch = useAppDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/articulo/get/" + id);
      const jsonData = await response.json();
      setItem(jsonData);
    } catch (error) {
      console.error("Error eeee:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addItemToCart = () => {
    const newItem = { ...item };
    dispatch(addToCart(newItem));
  };

  if (!item) {
    return <span>cargando...</span>;
  }

  return (
    <main className="bg-white">
      <div className="pt-6">
        {/* <!-- Image gallery --> */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <Image
              src={item.imagen}
              width={500}
              height={500}
              alt="Picture of the author"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* <!-- Product info --> */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {item.nombre}
            </h1>
          </div>

          {/* <!-- Options --> */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {getPriceInCOP(item.precio)}
            </p>

            <div className="mt-10">
              {/* <!-- Colors --> */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Categoria: {getCategoryLabel(item.idCategoria)}
                </h3>
              </div>

              <button
                onClick={addItemToCart}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Agregar al carrito
              </button>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* <!-- Description and details --> */}
            <div>
              <h3 className="sr-only">Descripción</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{item.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemPage;
