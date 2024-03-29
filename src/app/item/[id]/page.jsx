import ItemPage from "./ItemPage";

export default function Page({ params }) {
  return <ItemPage id={params.id} />;
}
