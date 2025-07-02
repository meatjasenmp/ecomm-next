import { Field } from "@base-ui-components/react/field";
import React from "react";
import Grid from "@/app/components/Grid";
import styles from "@/app/styles/components/form.module.css";
import ProductImage from "@/app/components/ProductForm/images/ProductImage";

export default function ProductImages() {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="images" className={styles.fieldlabel}>
        Product Images
      </Field.Label>
      <Grid>
        <ProductImage />
        <ProductImage />
        <ProductImage />
      </Grid>
    </Field.Root>
  );
}
