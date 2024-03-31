import "./globals.css";
import Provider from "../redux/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Great Ecommerce",
  description: "The Great Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
