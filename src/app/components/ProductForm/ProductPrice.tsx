import { Field } from "@base-ui-components/react/field";
import { HasError } from "./ProductForm";
import styles from "@/app/styles/components/form.module.css";
import classNames from "classnames";

// TODO: Display image preview if images are uploaded
export default function ProductPrice({ hasError }: HasError) {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="price" className={styles.fieldlabel}>
        Price
      </Field.Label>
      <Field.Control
        id="price"
        name="price"
        type="text"
        placeholder="0.00"
        className={classNames(styles.fieldcontrol, hasError && styles.error)}
      />
    </Field.Root>
  );
}
