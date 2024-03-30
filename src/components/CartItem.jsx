import Image from "next/image";
import React from "react";

const CartItem = ({ item }) => {
  return (
    <>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src="https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{item.nombre}</a>
            </h3>
            <p className="ml-4">
              {new Intl.NumberFormat("es-CO", {
                maximumFractionDigits: 0,
                style: "currency",
                currency: "COP",
              }).format(item.precio)}
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Cantidad: {item.cantidad}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Quitar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
