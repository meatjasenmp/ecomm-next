import Grid from "@/app/components/Grid";
import { ProductInterface } from "@/app/api/types";

interface ProductsGridProps {
  products: ProductInterface[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  return <Grid />;
}
