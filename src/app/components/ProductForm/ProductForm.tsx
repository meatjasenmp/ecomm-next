"use client";

import Form from "next/form";
import { useActionState } from "react";
import { Fieldset } from "@base-ui-components/react/fieldset";
import { addProduct } from "@/app/actions/product-form/actions";
import ProductFormFooter from "@/app/components/ProductForm/ProductFormFooter";
import { CategoriesProps } from "@/app/admin/products/create/page";
import styles from "@/app/styles/components/form.module.css";
import ProductCategories from "./ProductCategories";
import ProductDescription from "./ProductDescription";
import ProductDiscount from "./ProductDiscount";
import ProductImages from "./ProductImages";
import ProductPrice from "./ProductPrice";
import ProductShortDescription from "./ProductShortDescription";
import ProductTitle from "./ProductTitle";
import DisplayErrors, { hasError } from "./DisplayErrors";

const initialState = {
  message: "",
  error: undefined,
};

export type HasError = {
  hasError: boolean;
};

export default function ProductForm({ categories }: CategoriesProps) {
  const [state, formAction] = useActionState(addProduct, initialState);
  return (
    <Form action={formAction} className={styles.form}>
      <h2>Create Product</h2>
      <Fieldset.Root className={styles.fieldset}>
        <Fieldset.Legend className={styles.fieldlegend}>
          Product Details
        </Fieldset.Legend>
        <ProductTitle hasError={hasError(state?.error, "title")} />
        <ProductDescription hasError={hasError(state?.error, "description")} />
        <ProductShortDescription />
        <ProductCategories categories={categories} />
        <ProductImages />
        <ProductPrice hasError={hasError(state?.error, "price")} />
        <ProductDiscount />
      </Fieldset.Root>
      <ProductFormFooter />
      <h5>{state?.message}</h5>
      {state?.error && <DisplayErrors errors={state.error} />}
    </Form>
  );
}
