import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link className="text-sm font-semibold leading-6 text-gray-900" href={"/"}>The Great Ecommerce</Link>
        <Link className="text-sm font-semibold leading-6 text-gray-900" href={"/cart"}>Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;
