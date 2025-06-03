import { Product } from "@/app/api/products/types";
import { PreviewCard } from "@base-ui-components/react/preview-card";
import styles from "@/app/styles/components/card.module.css";

export default function DefaultCardContent({ product }: { product: Product }) {
  return (
    <PreviewCard.Trigger href="#" className={styles.card}>
      <div className={styles.cardContent}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </PreviewCard.Trigger>
  );
}
