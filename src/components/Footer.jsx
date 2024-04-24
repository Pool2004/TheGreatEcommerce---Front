import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-slate-100">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Cuenta</h3>
              <ul role="list" className="mt-6 space-y-6">
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    Administrar cuenta
                  </div>
                </li>
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    Ordenes
                  </div>
                </li>
                <li className="text-sm">
                  <Link
                    href={"/backoffice"}
                    className="text-gray-500 hover:text-gray-600"
                  >
                    Iniciar sesion
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Servicios</h3>
              <ul role="list" className="mt-6 space-y-6">
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    Envíos y devoluciones
                  </div>
                </li>
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    Garantía
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Compañía</h3>
              <ul role="list" className="mt-6 space-y-6">
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    ¿Quiénes somos?
                  </div>
                </li>
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    Términos y condiciones
                  </div>
                </li>
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    Privacidad
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Redes sociales
              </h3>
              <ul role="list" className="mt-6 space-y-6">
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    Facebook
                  </div>
                </li>
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    Instagram
                  </div>
                </li>
                <li className="text-sm">
                  <div className="text-gray-500 hover:text-gray-600">
                    Pinterest
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-center text-sm text-gray-500">
            <p>Envíos a todo Colombia</p>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500 sm:mt-0">
            &copy; {new Date().getFullYear()} The Great Ecommerce
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
