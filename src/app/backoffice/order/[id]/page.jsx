import OrderPage from "./OrderPage";

export default function Order({ params }) {
  return <OrderPage id={params.id} />;
}
