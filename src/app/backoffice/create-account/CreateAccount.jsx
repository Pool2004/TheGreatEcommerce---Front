"use client";
import Input from "@/components/Input";
import Select from "@/components/Select";
import useForm from "@/customHooks/useForm";
import { useAppSelector } from "@/redux/hooks/hooks";
import { redirectUserTo } from "@/utils/utils";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

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

  const { name, email, id, password, phone, rol, gender, onInputChange } =
    useForm({
      name: "",
      email: "",
      password: "",
      id: "",
      phone: 0,
      gender: "M",
      rol: "Cliente",
    });

  const router = useRouter();
  const user = useAppSelector((state) => state.user);

  const validateInputValue = (newUser) => {
    let message = "";
    let areValid = true;
    if (newUser.nombre === "") {
      message = "Por favor ingrese un nombre";
      areValid = false;
    } else if (newUser.correo === "") {
      message = "Por favor ingrese un correo";
      areValid = false;
    } else if (newUser.contrasenia === "") {
      message = "Por favor ingrese un contrasena";
      areValid = false;
    } else if (newUser.telefono === 0) {
      message = "Por favor ingrese un telefono";
      areValid = false;
    }
    return { message, areValid };
  };

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

      const areValuesValid = validateInputValue(newUser);

      if (!areValuesValid.areValid) {
        toast.error(areValuesValid.message);
      } else {
        const response = await fetch("http://localhost:8080/usuario/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...newUser }),
        });

        const messsage = await response.text();
        // Verificar el estado de la respuesta
        if (response.ok && response.status === 200) {
          toast.success(messsage);
          router.push(redirectUserTo());
        } else {
          throw new Error("Problemas para crear la cuenta");
        }
      }
    } catch (error) {
      toast.error(error.messsage);
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

                {user && user.rol === "Administrador" ? (
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
            onClick={() => router.push("/backoffice")}
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
