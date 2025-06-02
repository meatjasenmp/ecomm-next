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
import { ErrorProperties } from "@/app/api/products/types";

const initialState = {
  message: "",
  error: undefined,
};

function DisplayErrors({ errors }: { errors: ErrorProperties }) {
  return (
    <ul>
      {Object.values(errors!).map((err, i) => {
        return <li key={uuidv4()}>{err.errors.join(", ")}</li>;
      })}
    </ul>
  );
}

function hasError(
  errors: ErrorProperties | undefined,
  fieldName: string,
): boolean {
  return errors ? Object.keys(errors).includes(fieldName) : false;
}

export default function ProductForm({ categories }: CategoriesProps) {
  const [state, formAction] = useActionState(addProduct, initialState);

  return (
    <Form action={formAction} className={styles.form}>
      <ProductFormHeader />
      <Fieldset.Root className={styles.fieldset}>
        <Fieldset.Legend className={styles.fieldlegend}>
          Product Details
        </Fieldset.Legend>
        <ProductTitle hasError={hasError(state?.error, "title")} />
        <ProductShortDescription />
        <ProductDescription />
        <ProductCategories categories={categories} />
        <ProductImages />
        <ProductPrice />
        <ProductDiscount />
      </Fieldset.Root>
      <ProductFormFooter />
      <h5>{state?.message}</h5>
      {state?.error && <DisplayErrors errors={state.error} />}
    </Form>
  );
}
