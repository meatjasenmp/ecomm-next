import { Field } from "@base-ui-components/react/field";
import styles from "@/app/styles/components/form.module.css";

export default function ProductShortDescription() {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="short-description" className={styles.fieldlabel}>
        Short Description
      </Field.Label>
      <textarea
        id="short-description"
        name="short-description"
        rows={4}
        className={styles.textarea}
      />
    </Field.Root>
  );
}
