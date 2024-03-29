"use client";
import Input from "@/components/Input";
import useForm from "@/customHooks/useForm";

/**
 * @description component that show the form item
 * @returns Form Item Componet
 */
const FormItem = () => {
  const { name, description, price, quantity, img, onInputChange } = useForm({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    img: "",
  });

  /**
   * @description function to handle the submit event
   * @param {*} event
   */
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const item = {
      name,
      description,
      price,
      quantity,
      img,
    };
    console.log("articulo nuevo: >>>>", item);
  };

  return (
    <form onSubmit={handleOnSubmit} className="w-full mb-7">
      <Input
        label={"Nombre:"}
        name="name"
        value={name}
        onChange={onInputChange}
        styles={"mb-3"}
      />
      <Input
        label={"Descripción:"}
        name="description"
        value={description}
        onChange={onInputChange}
        styles={"mb-3"}
      />
      <Input
        label={"Precio:"}
        name="price"
        value={price}
        onChange={onInputChange}
        styles={"mb-3"}
      />
      <Input
        label={"Cantidad:"}
        name="quantity"
        value={quantity}
        onChange={onInputChange}
        styles={"mb-3"}
      />
      <Input
        label={"URL de la imagen:"}
        name="img"
        value={img}
        onChange={onInputChange}
        styles={"mb-3"}
      />
      <button className="bg-indigo-600 text-white border-none font-medium rounded py-2 px-3 w-full">
        Crear producto
      </button>
    </form>
  );
};

export default FormItem;
