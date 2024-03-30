import "./globals.css";
import Provider from "../redux/Provider";
import Header from "@/components/Header";

export const metadata = {
  title: "The Great Ecommerce",
  description: "The Great Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Header/>
          {children}
          </body>
      </Provider>
    </html>
  );
}
