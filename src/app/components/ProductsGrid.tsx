import { fetchProducts } from "@/app/api/products/requests";
import Grid from "@/app/components/Grid";
import ProductCard from "@/app/components/ProductCard";
import NotFound from "@/app/components/NotFound";

export default async function ProductsGrid({ isAdmin }: { isAdmin?: boolean }) {
  const products = await fetchProducts();

  if (!products.length) return <NotFound />;

  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} isAdmin={isAdmin} />
      ))}
    </Grid>
  );
}
