import fetchData from "@/app/api/requests";
import Sidebar from "@/app/parts/Sidebar";

export default async function Page() {
  const products = await fetchData();

  return (
    <div className="container lg:flex">
      <Sidebar>Sidebar</Sidebar>
      <section className="w-4/5">Products Grid</section>
    </div>
  );
}
