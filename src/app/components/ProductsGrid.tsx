import fetchData from "@/app/api/requests";
import Grid from "@/app/components/Grid";
import Card from "@/app/components/Card";
import { ProductInterface } from "@/app/api/types";

function ProductCard({ product }: { product: ProductInterface }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-gray-700">${product.price}</p>
    </Card>
  );
}

export default async function ProductsGrid() {
  const products: ProductInterface[] = await fetchData();
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Grid>
  );
}
