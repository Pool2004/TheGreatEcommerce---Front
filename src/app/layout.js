import "./globals.css";

export const metadata = {
  title: "The Great Ecommerce",
  description: "The Great Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
