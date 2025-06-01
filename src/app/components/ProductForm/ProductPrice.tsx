import { Field } from "@base-ui-components/react/field";
import styles from "@/app/styles/components/form.module.css";

export default function ProductPrice() {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="price" className={styles.fieldlabel}>
        Price
      </Field.Label>
      <Field.Control
        required
        id="price"
        name="price"
        type="text"
        placeholder="0.00"
        className={styles.fieldcontrol}
      />
    </Field.Root>
  );
}
