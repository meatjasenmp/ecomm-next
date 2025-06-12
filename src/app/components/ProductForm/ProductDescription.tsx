import { Field } from "@base-ui-components/react/field";
import { HasError } from "./ProductForm";
import styles from "@/app/styles/components/form.module.css";
import classNames from "classnames";

export default function ProductDescription({ hasError }: HasError) {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="description" className={styles.fieldlabel}>
        Description
      </Field.Label>
      <textarea
        name="description"
        rows={6}
        className={classNames(styles.fieldcontrol, hasError && styles.error)}
      />
    </Field.Root>
  );
}
