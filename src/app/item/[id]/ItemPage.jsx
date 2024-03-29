"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import items from "../../../mockdata/items.json";

const getItem = (id) => {
  return items.find((item) => item.id === parseInt(id));
};

const ItemPage = ({ id }) => {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setItem(getItem(id));
    return () => {
      return null;
    };
  }, []);

  const handleOnChangeInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (!name) {
      setQuantity(value);
    }
    switch (name) {
      case "increment": {
        if (quantity >= item.cantidad) {
          setQuantity(item.cantidad);
          break;
        }
        setQuantity(quantity + 1);
        break;
      }
      case "decrement": {
        if (parseInt(quantity) <= 0) {
          setQuantity(0);
          break;
        }
        setQuantity(quantity - 1);
        break;
      }
      default:
        break;
    }
  };

  const addToCart = () => {
    console.log("agregando");
  };

  if (!item) {
    return <span>cargando...</span>;
  }

  return (
    <main>
      <Image
        src="https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <span>{item.nombre}</span>
      <span>{item.precio}</span>
      <div>
        <button name="decrement" onClick={handleOnChangeInput}>
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleOnChangeInput}
          min={0}
        />
        <button name="increment" onClick={handleOnChangeInput}>
          +
        </button>
      </div>
      <button
        className="bg-indigo-600 text-white border-none font-medium rounded py-2 px-3 w-full"
        onClick={addToCart}
      >
        comprar
      </button>
    </main>
  );
};

export default ItemPage;
