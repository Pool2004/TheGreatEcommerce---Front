"use client";
import Input from "@/app/components/Input";
import useForm from "@/app/customHooks/useForm";

export default function Home() {
  const { name, description, img, onInputChange } = useForm({
    name: "",
    description: "",
    img: "",
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("producto nuevo: >>>>", { name, description, img });
  };
  return (
    <main>
      <h1 className="text-3xl font-bold text-center ">Crear producto</h1>
      <form onSubmit={handleOnSubmit} className="w-full mb-7">
        <Input
          label={"Nombre"}
          name="name"
          value={name}
          onChange={onInputChange}
          styles={"mb-3"}
        />
        <Input
          label={"Descripcion"}
          name="description"
          value={description}
          onChange={onInputChange}
          styles={"mb-3"}
        />
         <Input
          label={"Imagen URL"}
          name="img"
          value={img}
          onChange={onInputChange}
          styles={"mb-3"}
        />
        <button className="bg-indigo-600 text-white border-none font-medium rounded py-2 px-3 w-full">Crear producto</button>
      </form>
    </main>
  );
}
