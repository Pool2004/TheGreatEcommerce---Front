import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ item }) => {
  return (
    <Link className="flex flex-col" href={"/item/" + item.id}>
      <Image
        src="https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <span>{item.nombre}</span>
      <span>
        {new Intl.NumberFormat("es-CO", {
          maximumFractionDigits: 0,
          style: "currency",
          currency: "COP",
        }).format(item.precio)}
      </span>
    </Link>
  );
};

export default ItemCard;
