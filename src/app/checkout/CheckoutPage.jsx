"use client";
import Input from "@/components/Input";
import Select from "@/components/Select";
import useForm from "@/customHooks/useForm";

const CheckoutPage = () => {
  const {
    name,
    lastname,
    email,
    country,
    address,
    state,
    city,
    postalCode,
    onInputChange,
  } = useForm({
    name: "",
    lastname: "",
    email: "",
    country: 1,
    address: "",
    state: "",
    city: "",
    postalCode: "",
  });
  return (
    <main className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:py-20">
      <form className="w-full">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Informacion de envio
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Llene la informacion necesaria para el envio.
          </p>

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
                label={"Apellido:"}
                name="lastname"
                value={lastname}
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
              <Input
                label={"Departamento:"}
                name="state"
                value={state}
                onChange={onInputChange}
              />
            </div>

            <div className="sm:col-span-2">
              <Input
                label={"Ciudad:"}
                name="city"
                value={city}
                onChange={onInputChange}
              />
            </div>

            <div className="sm:col-span-2">
              <Input
                label={"Codigo postal:"}
                name="postalCode"
                value={postalCode}
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CheckoutPage;
