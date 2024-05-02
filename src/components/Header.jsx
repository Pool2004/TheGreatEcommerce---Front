"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";
import React from "react";
import { Searchbar } from "./Searchbar";
import { useRouter } from "next/navigation";

const Header = () => {
  const { items } = useAppSelector((state) => state.cart);
  const router = useRouter();
  return (
    <header className="bg-white border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link
          className="text-sm font-semibold leading-6 text-gray-900"
          href={"/"}
        >
          The Great Ecommerce
        </Link>
        {/* <Searchbar /> */}
        <div className="flex">
          <Link href={"/cart"} className="group -m-2 flex items-center p-2">
            <svg
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              {items.length}
            </span>
            <span className="sr-only">items in cart, view bag</span>
          </Link>
          <button
            type="button"
            className="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => router.push("/backoffice")}
          >
            Iniciar Sesion
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
