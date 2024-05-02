"use clients";
import React from "react";
import { getPriceInCOP } from "@/utils/utils";
import Link from "next/link";

const OrdersPage = () => {
  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8 lg:py-20">
      <h1>Ordenes</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Orden id
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
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td className="px-6 py-4">Nicolas Londono</td>
              <td className="px-6 py-4">2024-05-01</td>
              <td className="px-6 py-4">{getPriceInCOP(120000)}</td>
              <td className="px-6 py-4">
                <Link
                  href="/backoffice/order/1"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Editar
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default OrdersPage;
