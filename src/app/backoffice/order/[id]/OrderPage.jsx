"use client";
import Input from "@/components/Input";
import useForm from "@/customHooks/useForm";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const OrderPage = ({ id }) => {
  const {
    date,
    state,
    address,
    card,
    name,
    phone,
    quantity,
    delivery,
    onInputChange,
    setFormValues,
  } = useForm({
    state: "",
    date: "",
    quantity: 0,
    address: "",
    card: "",
    name: "",
    phone: "",
    delivery: "",
  });

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (
      !user ||
      (user && user.rol !== "Encargado" && user.rol !== "Administrador")
    ) {
      router.push("/");
    }
  }, [user]);

  const router = useRouter();

  const fetchOrder = async () => {
    try {
      const response = await fetch("http://localhost:8080/orden/get/" + id);
      const order = await response.json();
      const newOrder = {
        quantity: order.cantidad,
        date: order.fecha,
        state: order.idDepartamento.nombre,
        address: order.direccion,
        card: order.idUsuario.identificacion,
        name: order.idUsuario.nombre,
        phone: order.idUsuario.telefono,
        delivery: order.tipoEntrega,
      };
      setFormValues(newOrder);
    } catch (error) {
      console.error("Error eeee:", error);
    }
  };

  useEffect(() => {
    fetchOrder();
    return () => {
      return null;
    };
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("editando");
  };

  return (
    <main className="mx-auto flex flex-col max-w-7xl justify-between p-6 lg:px-8 lg:py-20">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3 border-b border-gray-900/10 pb-8">
        Editar orden # {id}
      </h2>
      <form onSubmit={handleOnSubmit} className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                label={"Cantidad articulos:"}
                name="quantity"
                value={quantity}
                onChange={onInputChange}
                isRequired={true}
                disabled={true}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                label={"Fecha:"}
                name="date"
                value={date}
                onChange={onInputChange}
                isRequired={true}
                disabled={true}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                label={"Departamento:"}
                name="state"
                value={state}
                onChange={onInputChange}
                isRequired={true}
                disabled={true}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                label={"Dirección:"}
                name="address"
                value={address}
                onChange={onInputChange}
                isRequired={true}
                disabled={true}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                label={"Cédula:"}
                name="card"
                value={card}
                onChange={onInputChange}
                isRequired={true}
                disabled={true}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                label={"Nombre:"}
                name="name"
                value={name}
                onChange={onInputChange}
                isRequired={true}
                disabled={true}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                label={"Télefono:"}
                name="phone"
                value={phone}
                onChange={onInputChange}
                isRequired={true}
                disabled={true}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                label={"Tipo entrega:"}
                name="delivery"
                value={delivery}
                onChange={onInputChange}
                isRequired={true}
                disabled={true}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => router.push("/backoffice/order")}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Editar
          </button>
        </div>
      </form>
    </main>
  );
};

export default OrderPage;
