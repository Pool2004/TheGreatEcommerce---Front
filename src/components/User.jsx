import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { UserIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { logout } from "@/redux/slice/userSlice";
import { clearCart } from "@/redux/slice/cartSlice";

const userNavigation = [{ name: "Ordenes", href: "/" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const User = () => {
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logout());
  };
  return (
    <>
      {user !== null ? (
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-50 text-sm ">
              <UserIcon
                className="block h-6 w-6 rounded-full"
                aria-hidden="true"
              />
              <div className="flex flex-col ml-2">
                <div className="text-left">{user.name}</div>
                <div className="text-xs text-left">{user.rol}</div>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                    )}
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <button
          type="button"
          className=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => router.push("/backoffice")}
        >
          Iniciar sesión
        </button>
      )}
    </>
  );
};

export default User;
