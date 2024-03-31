import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ItemCard = ({ item }) => {
  const router = useRouter();
  return (
    <button
      className="group relative"
      onClick={() => router.push("/item/" + item.id)}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src="https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={"/item/" + item.id}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {item.nombre}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">categoria</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {new Intl.NumberFormat("es-CO", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "COP",
          }).format(item.precio)}
        </p>
      </div>
    </button>
  );
};

export default ItemCard;
