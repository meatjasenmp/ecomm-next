import { Product } from "@/app/api/products/types";
import { PreviewCard } from "@base-ui-components/react/preview-card";
import DefaultCardContent from "@/app/components/Cards/DefaultCardContent";
import AdminCardContent from "@/app/components/Cards/AdminCardContent";

interface ProductCardProps {
  product: Product;
  isAdmin: boolean | undefined;
}

export default function ProductCard({ product, isAdmin }: ProductCardProps) {
  return (
    <PreviewCard.Root>
      {!isAdmin && <DefaultCardContent product={product} />}
      {isAdmin && <AdminCardContent product={product} />}
    </PreviewCard.Root>
  );
}
