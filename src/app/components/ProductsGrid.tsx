import { fetchProducts } from "@/app/api/requests";
import Grid from "@/app/components/Grid";
import ProductCard from "@/app/components/ProductCard";
import NotFound from "@/app/components/NotFound";

export default async function ProductsGrid() {
  const products = await fetchProducts();

  if (!products.length) return <NotFound />;

  return (
    <section className="w-4/5">
      <Grid>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Grid>
    </section>
  );
}
