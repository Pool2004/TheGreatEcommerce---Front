"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import CartItem from "@/components/CartItem";
import { getPriceInCOP } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { clearCart } from "@/redux/slice/cartSlice";

const CartPage = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8 lg:py-20">
      <div className="flex justify-between border-gray-100 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6 pb-6 border-b">
        <h1 className=" ">Carrito de compra</h1>
        {items.length > 0 ? (
          <button
            onClick={handleClearCart}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-fit"
          >
            Limpiar Carrito
          </button>
        ) : null}
      </div>
      {items.length === 0 ? (
        <section>
          <h3>Carrito vacio</h3>
        </section>
      ) : (
        <section>
          <div className="border-b border-gray-900/10 pb-12">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((item) => {
                return (
                  <li className="flex py-6" key={item.idArticulo}>
                    <CartItem item={item} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-b border-gray-900/10 pb-6 pt-6 text-right text-2xl font-bold ">
            Total: {getPriceInCOP(total)}
          </div>
          <div className="pb-6 pt-6 flex justify-center">
            <button
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/3"
              onClick={() => router.push("/checkout")}
            >
              Comprar
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default CartPage;
