import { Field } from "@base-ui-components/react/field";
import styles from "@/app/styles/components/form.module.css";

export default function ProductDiscount() {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="discount" className={styles.fieldlabel}>
        Product Discount
      </Field.Label>
      <Field.Control
        id="discount"
        name="discount"
        type="text"
        placeholder="0.00"
        className={styles.fieldcontrol}
      />
    </Field.Root>
  );
}
