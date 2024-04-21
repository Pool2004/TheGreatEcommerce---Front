"use client";
import { getCategories } from "@/api/category";
import Input from "@/components/Input";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import useCategories from "@/customHooks/useCategories";
import useForm from "@/customHooks/useForm";

/**
 * @description component that show the form item
 * @returns Form Item Componet
 */
const FormItem = () => {
  const { data: categories, error, loading } = useCategories();

  const {
    name,
    description,
    price,
    quantity,
    img,
    onInputChange,
    category,
    isCustom,
  } = useForm({
    name: "",
    description: "",
    category: undefined,
    price: 0,
    quantity: 0,
    img: "",
    isCustom: false,
  });

  /**
   * @description function to handle the submit event
   * @param {*} event
   */
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const newItem = {
      imagen: img,
      descripcion: description,
      nombre: name,
      precio: price,
      cantidad: quantity,
      idCategoria: { idCategoria: category },
      esPersonalizable: isCustom,
    };

    try {
      const response = await fetch("http://localhost:8080/articulo/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newItem }),
      });

      // Verificar el estado de la respuesta
      if (response.ok && response.status === 200) {
        console.log("Item creado con exito", response);
      } else {
        console.log("algo paso");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setStatus("Hubo un error en la solicitud.");
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className="w-full">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Crear artículo
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Llena toda la información necesaria para crear un artículo.
            </p>
            <div className=" border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Input
                    label={"Nombre:"}
                    name="name"
                    value={name}
                    onChange={onInputChange}
                  />
                </div>
                <div className="sm:col-span-3">
                  <Input
                    label={"Precio:"}
                    name="price"
                    type={"number"}
                    value={price}
                    onChange={onInputChange}
                  />
                </div>
                <div className="sm:col-span-3">
                  <Input
                    label={"El articulo es personalizable:"}
                    name="isCustom"
                    type={"checkbox"}
                    value={isCustom}
                    onChange={onInputChange}
                  />
                </div>
                <div className="sm:col-span-3">
                  <Input
                    label={"Cantidad:"}
                    name="quantity"
                    value={quantity}
                    type={"number"}
                    onChange={onInputChange}
                  />
                </div>
                <div className="sm:col-span-3">
                  <Select
                    label={"Categoria:"}
                    name="category"
                    value={category}
                    onChange={onInputChange}
                    options={categories}
                  />
                </div>
                <div className="col-span-full">
                  <TextArea
                    label={"Descripción:"}
                    name="description"
                    value={description}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-span-full">
                  <Input
                    label={"URL de la imagen:"}
                    name="img"
                    value={img}
                    onChange={onInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Crear producto
          </button>
        </div>
      </form>
    </>
  );
};

export default FormItem;
