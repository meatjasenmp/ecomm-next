import fetchData from "@/app/api/requests";
import Sidebar from "@/app/parts/Sidebar";
import ProductsGrid from "@/app/components/ProductsGrid";
import { ProductInterface } from "@/app/api/types";

export default async function Page() {
  const products: ProductInterface[] = await fetchData();

  return (
    <div className="container lg:flex">
      <Sidebar>Sidebar</Sidebar>
      <section className="w-4/5">
        <ProductsGrid products={products} />
      </section>
    </div>
  );
}
