"use client";
import React, { useEffect, useState } from "react";
import { getPriceInCOP } from "@/utils/utils";
import Link from "next/link";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrder = async () => {
    try {
      const response = await fetch("http://localhost:8080/orden/get/all");
      const jsonData = await response.json();
      console.log(jsonData);
      setOrders(jsonData);
    } catch (error) {
      console.error("Error eeee:", error);
      setOrders([]);
    }
  };

  useEffect(() => {
    fetchOrder();
    return () => {
      return null;
    };
  }, []);

  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl py-6 ">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Ordenes
        </h1>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Orden id
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
              <th scope="col" className="px-6 py-3">
                Usuario
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={"orden__" + order.idOrden}>
                  <td className="px-6 py-4">{order.idOrden}</td>
                  <td className="px-6 py-4">{order.estado}</td>
                  <td className="px-6 py-4">{order.idUsuario.nombre}</td>
                  <td className="px-6 py-4">{order.fecha}</td>
                  <td className="px-6 py-4">
                    {getPriceInCOP(order.valorTotal)}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={"/backoffice/order/" + order.idOrden}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default OrdersPage;
