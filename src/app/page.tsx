import Sidebar from "@/app/parts/Sidebar";
import ProductsGrid from "@/app/components/ProductsGrid";

export default async function Page() {
  return (
    <div className="container lg:flex">
      <Sidebar>Sidebar</Sidebar>
      <section className="w-4/5">
        <ProductsGrid />
      </section>
    </div>
  );
}
