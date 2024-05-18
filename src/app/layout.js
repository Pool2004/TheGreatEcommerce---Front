import "./globals.css";
import Provider from "../redux/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "The Great Ecommerce",
  description: "The Great Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-ES" className="h-full bg-gray-100">
      <Provider>
        <body className="h-full">
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </body>
      </Provider>
    </html>
  );
}
