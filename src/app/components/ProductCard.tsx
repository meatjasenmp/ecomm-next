import { Product } from "@/app/api/products/types";
import { PreviewCard } from "@base-ui-components/react/preview-card";
import styles from "@/app/styles/components/card.module.css";

interface ProductCardProps {
  product: Product;
  isAdmin: boolean | undefined;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <PreviewCard.Root>
      <PreviewCard.Trigger href="#" className={styles.card}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </PreviewCard.Trigger>
    </PreviewCard.Root>
  );
}
