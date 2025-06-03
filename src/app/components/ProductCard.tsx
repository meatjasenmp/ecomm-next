import { Product } from "@/app/api/products/types";
import { PreviewCard } from "@base-ui-components/react/preview-card";
import styles from "@/app/styles/components/card.module.css";

interface ProductCardProps {
  product: Product;
  isAdmin: boolean | undefined;
}

const CardContent = ({ product }: { product: Product }) => {
  return (
    <PreviewCard.Trigger href="#" className={styles.card}>
      <div className={styles.cardContent}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </PreviewCard.Trigger>
  );
};

const AdminCardContent = ({ product }: { product: Product }) => {
  return (
    <PreviewCard.Trigger href="#" className={styles.card}>
      <div className={styles.cardContent}>
        <h2>{product.title}</h2>
      </div>
    </PreviewCard.Trigger>
  );
};

export default function ProductCard({ product, isAdmin }: ProductCardProps) {
  return (
    <PreviewCard.Root>
      {!isAdmin && <CardContent product={product} />}
      {isAdmin && <AdminCardContent product={product} />}
    </PreviewCard.Root>
  );
}
