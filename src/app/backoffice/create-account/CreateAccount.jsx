"use client";
import Input from "@/components/Input";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import useForm from "@/customHooks/useForm";
import { useAppSelector } from "@/redux/hooks/hooks";

const CreateAccount = () => {
  const rols = [
    {
      id: "Encargado",
      label: "Encargado",
    },
    {
      id: "Administrador",
      label: "Administrador",
    },
    {
      id: "Diseniador",
      label: "Diseniador",
    },
    {
      id: "Cliente",
      label: "Cliente",
    },
  ];

  const { name, email, password, phone, rol, gender, id, onInputChange } =
    useForm({
      name: "",
      email: "",
      password: "",
      phone: 0,
      gender: "M",
      id: 0,
      rol: "Cliente",
    });

  const user = useAppSelector((state) => state.user);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = {
        nombre: name,
        telefono: phone,
        correo: email,
        rol: rol,
        sexo: gender,
        identificacion: id,
        contrasenia: password,
      };
      const response = await fetch("http://localhost:8080/usuario/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newUser }),
      });

      // Verificar el estado de la respuesta
      if (response.ok && response.status === 200) {
        console.log("Usuario creado con exito", response);
      } else {
        console.log("algo paso");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <main className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:py-20">
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

                {user && user.rol === 'Administrador' ? (
                  <div className="sm:col-span-3">
                    <Select
                      label={"Rol:"}
                      name="rol"
                      value={rol}
                      onChange={onInputChange}
                      options={rols}
                    />
                  </div>
                ) : null}

                <div className="col-span-3">
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
            Crear cuenta
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateAccount;
