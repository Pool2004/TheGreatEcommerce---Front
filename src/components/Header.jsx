"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";

import { Disclosure } from "@headlessui/react";
import User from "./User";

const Header = () => {
  const { totalItems } = useAppSelector((state) => state.cart);

  return (
    <header>
      <Disclosure as="nav" className="bg-white border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  className="text-sm font-semibold leading-6 text-gray-900"
                  href={"/"}
                >
                  The Great Ecommerce
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center md:ml-6">
                <Link
                  href={"/cart"}
                  className="group  flex items-center p-2 mr-4"
                >
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
                    {totalItems}
                  </span>
                </Link>
                <User />
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </header>
  );
};

export default Header;
