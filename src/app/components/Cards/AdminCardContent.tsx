import { Product } from "@/app/api/products/types";
import styles from "@/app/styles/components/card.module.css";
import { PreviewCard } from "@base-ui-components/react/preview-card";

export default function AdminCardContent({ product }: { product: Product }) {
  return (
    <PreviewCard.Trigger href="#" className={styles.card}>
      <div className={styles.cardContent}>
        <h2>{product.title}</h2>
      </div>
    </PreviewCard.Trigger>
  );
}
