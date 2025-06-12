import { Field } from "@base-ui-components/react";
import { HasError } from "./ProductForm";
import styles from "@/app/styles/components/form.module.css";
import classNames from "classnames";

export default function ProductTitle({ hasError }: HasError) {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="title" className={styles.fieldlabel}>
        Product Title
      </Field.Label>
      <Field.Control
        type="text"
        name="title"
        placeholder="Air Jordan 1"
        className={classNames(styles.fieldcontrol, hasError && styles.error)}
      />
    </Field.Root>
  );
}
