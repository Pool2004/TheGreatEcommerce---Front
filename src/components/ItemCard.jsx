import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCategoryLabel, getPriceInCOP } from "@/utils/utils";

const ItemCard = ({ item }) => {
  const router = useRouter();
  return (
    <button
      className="group relative"
      onClick={() => router.push("/item/" + item.idArticulo)}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={
            item.imagen
              ? item.imagen
              : "https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
          }
          width={500}
          height={500}
          alt="Picture of the author"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="text-left">
          <h3 className="text-sm text-gray-700">{item.nombre}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {getCategoryLabel(item.idCategoria)}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {getPriceInCOP(item.precio)}
        </p>
      </div>
    </button>
  );
};

export default ItemCard;
