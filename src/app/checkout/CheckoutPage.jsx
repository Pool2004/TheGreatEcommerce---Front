"use client";
import Input from "@/components/Input";
import Select from "@/components/Select";
import useDeparments from "@/customHooks/useDeparments";
import useCities from "@/customHooks/useCities";
import useForm from "@/customHooks/useForm";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useEffect } from "react";

const CheckoutPage = () => {
  const user = useAppSelector((state) => state.user);
  const {
    name,
    email,
    country,
    address,
    state,
    city,
    delivery,
    onInputChange,
    setFormValues,
  } = useForm({
    name: "",
    email: "",
    country: 1,
    address: "",
    state: 1,
    city: 1,
    delivery: 1,
  });
  const { data: deparments } = useDeparments();
  const { data: cities } = useCities({ state: parseInt(state) });

  const { total, items } = useAppSelector((state) => state.cart);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const today = new Date().toISOString().slice(0, 10);

      const newOrden = {
        fecha: today,
        valorTotal: total,
        direccion: address,
        idDepartamento: {
          idDepartamento: state,
        },
        idCiudad: {
          idCiudad: city,
        },
        tipoEntrega: delivery,
        idUsuario: { idUsuario: user.id },
        idArticulo: items.map((item) => {
          return {
            idArticulo: item.idArticulo,
            cantidad: item.cantidadComprar,
          };
        }),
      };

      const response = await fetch("http://localhost:8080/orden/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newOrden }),
      });

      // Verificar el estado de la respuesta
      if (response.ok && response.status === 200) {
        console.log("Orden creada con exito", response);
      } else {
        console.log("algo paso");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    if (user) {
      setFormValues({ name: user.name, email: user.email });
    }
  }, [user]);

  if (!user) {
    return (
      <main className="mx-auto flex max-w-7xl items-center justify-between  p-6 lg:px-8 lg:py-20 height_45">
        <h2 className="text-base font-semibold leading-7 text-gray-900 text-center w-full">
          Para continuar con la compra debe iniciar sesión
        </h2>
      </main>
    );
  }
  return (
    <main className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:py-20">
      <form className="w-full" onSubmit={handleOnSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Informacion de envio
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Llene la informacion necesaria para el envio.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <Input
                label={"Nombre:"}
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                label={"Correo:"}
                name="email"
                type={"email"}
                value={email}
                onChange={onInputChange}
              />
            </div>

            <div className="sm:col-span-3">
              <Select
                label={"Pais:"}
                name="country"
                value={country}
                onChange={onInputChange}
                options={[{ id: 1, label: "Colombia" }]}
              />
            </div>

            <div className="col-span-full">
              <Input
                label={"Direccion:"}
                name="address"
                value={address}
                onChange={onInputChange}
              />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <Select
                label={"Departamento:"}
                name="state"
                value={state}
                onChange={onInputChange}
                options={deparments}
              />
            </div>

            <div className="sm:col-span-2">
              <Select
                label={"Ciudad:"}
                name="city"
                value={city}
                onChange={onInputChange}
                options={cities}
              />
            </div>

            <div className="sm:col-span-2">
              <Select
                label={"Tipo de entrega:"}
                name="delivery"
                value={delivery}
                onChange={onInputChange}
                options={[
                  {
                    id: "Domicilio",
                    label: "Domicilio",
                  },
                  {
                    id: "Contraentrega",
                    label: "Contraentrega",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Comprar
        </button>
      </form>
    </main>
  );
};

export default CheckoutPage;
