import { Field } from "@base-ui-components/react/field";
import styles from "@/app/styles/components/form.module.css";

export default function ProductDescription() {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="description" className={styles.fieldlabel}>
        Description
      </Field.Label>
      <textarea
        id="description"
        name="description"
        rows={6}
        className={styles.textarea}
      />
    </Field.Root>
  );
}
