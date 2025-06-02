"use client";

import Form from "next/form";
import { useActionState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Fieldset } from "@base-ui-components/react/fieldset";
import { addProduct } from "@/app/actions/products/actions";
import ProductFormHeader from "@/app/components/ProductForm/ProductFormHeader";
import ProductFormFooter from "@/app/components/ProductForm/ProductFormFooter";
import { CategoriesProps } from "@/app/admin/create/page";
import styles from "@/app/styles/components/form.module.css";
import ProductCategories from "./ProductCategories";
import ProductDescription from "./ProductDescription";
import ProductDiscount from "./ProductDiscount";
import ProductImages from "./ProductImages";
import ProductPrice from "./ProductPrice";
import ProductShortDescription from "./ProductShortDescription";
import ProductTitle from "./ProductTitle";

const initialState = {
  message: "",
  error: undefined,
};

export default function ProductForm({ categories }: CategoriesProps) {
  const [state, formAction] = useActionState(addProduct, initialState);

  console.log("ProductForm state:", state.error);

  return (
    <Form action={formAction} className={styles.form}>
      <ProductFormHeader />
      <Fieldset.Root className={styles.fieldset}>
        <Fieldset.Legend className={styles.fieldlegend}>
          Product Details
        </Fieldset.Legend>
        <ProductTitle />
        <ProductShortDescription />
        <ProductDescription />
        <ProductCategories categories={categories} />
        <ProductImages />
        <ProductPrice />
        <ProductDiscount />
      </Fieldset.Root>
      <ProductFormFooter />
      <h5>{state?.message}</h5>
      {state?.error && (
        <ul className={styles.error}>
          {Object.values(state.error).map((err, i) => {
            return <li key={uuidv4()}>{err.errors.join(", ")}</li>;
          })}
        </ul>
      )}
    </Form>
  );
}
