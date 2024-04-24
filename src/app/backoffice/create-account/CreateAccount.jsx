"use client";
import Input from "@/components/Input";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import useForm from "@/customHooks/useForm";

const CreateAccount = () => {
  const { name, email, password, phone, address, gender, id, onInputChange } =
    useForm({
      name: "",
      email: "",
      password: "",
      phone: 0,
      address: "",
      gender: "M",
      id: 0,
    });

  const handleOnSubmit = () => {
    // console.log({ name, email, password, phone, address, gender, id });
  };

  return (
    <form onSubmit={handleOnSubmit} className="w-full">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Crear cuenta
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Llena toda la información necesaria para crear una cuenta.
          </p>
          <div className=" border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Input
                  label={"Nombre:"}
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  isRequired={true}
                />
              </div>
              <div className="sm:col-span-3">
                <Input
                  label={"Correo electronico:"}
                  name="email"
                  type={"email"}
                  value={email}
                  onChange={onInputChange}
                  isRequired={true}
                />
              </div>
              <div className="sm:col-span-3">
                <Input
                  label={"Contrasena:"}
                  name="password"
                  type={"password"}
                  value={password}
                  onChange={onInputChange}
                />
              </div>
              <div className="sm:col-span-3">
                <Input
                  label={"Telefono:"}
                  name="phone"
                  value={phone}
                  type={"number"}
                  onChange={onInputChange}
                  isRequired={true}
                />
              </div>
              <div className="sm:col-span-3">
                <Input
                  label={"Direccion:"}
                  name="address"
                  value={address}
                  type={"text"}
                  onChange={onInputChange}
                  isRequired={true}
                />
              </div>
              <div className="sm:col-span-3">
                <Select
                  label={"Genero:"}
                  name="gender"
                  value={gender}
                  onChange={onInputChange}
                  options={[
                    { id: "M", label: "Masculino" },
                    { id: "F", label: "Femenino" },
                  ]}
                />
              </div>

              <div className="col-span-full">
                <Input
                  label={"Cedula:"}
                  name="id"
                  value={id}
                  onChange={onInputChange}
                  isRequired={true}
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
  );
};

export default CreateAccount;
