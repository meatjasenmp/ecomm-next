import { Field } from "@base-ui-components/react";
import styles from "@/app/styles/components/form.module.css";

export default function ProductTitle() {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="title" className={styles.fieldlabel}>
        Product Title
      </Field.Label>
      <Field.Control
        id="title"
        name="title"
        type="text"
        placeholder="Air Jordan 1"
        className={styles.fieldcontrol}
      />
    </Field.Root>
  );
}
