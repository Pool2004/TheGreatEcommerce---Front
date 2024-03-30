"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks/hooks";
import CartItem from "@/components/CartItem";

const CartPage = () => {
  const { items, total } = useAppSelector((state) => state.cart);

  return (
    <main className="gx tv arh asp aur cez cxg dde">
      <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
        Carrito de compra
      </h2>
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
