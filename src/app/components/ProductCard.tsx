import { Product } from "@/app/api/types";
import Card from "@/app/components/Card";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-gray-700">${product.price}</p>
    </Card>
  );
}
