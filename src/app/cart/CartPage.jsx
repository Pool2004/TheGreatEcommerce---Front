"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks/hooks";
import CartItem from "@/components/CartItem";

const CartPage = () => {
  const { items, total } = useAppSelector((state) => state.cart);

  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8 lg:py-20">
      <h1 className="border-b border-gray-100 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6 pb-6">
        Carrito de compra
      </h1>
      {items.length === 0 ? (
        <section>
          <h3>Carrito vacio</h3>
        </section>
      ) : (
        <section>
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {items.map((item) => {
              return (
                <li className="flex py-6" key={item.id}>
                  <CartItem item={item} />
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
};

export default CartPage;
