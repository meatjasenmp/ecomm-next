import fetchData from "@/app/api/requests";
import Sidebar from "@/app/parts/Sidebar";

export default async function Page() {
  const products = await fetchData();

  return (
    <div className="2xl:container lg:flex mx-auto">
      <Sidebar>Sidebar</Sidebar>
      <section className="w-4/5">Products Grid</section>
    </div>
  );
}
