import FormItem from "../../FormItem";

export default function EditItem({ params }) {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center ">
        Editando producto: {params.id}
      </h1>
      <FormItem />
    </main>
  );
}
