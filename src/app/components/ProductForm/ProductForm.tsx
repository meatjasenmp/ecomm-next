"use client";

import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { Fieldset } from "@base-ui-components/react/fieldset";
import { addProduct } from "@/app/actions/products/actions";
import ProductFormHeader from "@/app/components/ProductForm/ProductFormHeader";
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
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  console.info("Product ID:", productId);
  return (
    <Form action={formAction} className={styles.form}>
      <ProductFormHeader />
      <Fieldset.Root className={styles.fieldset}>
        <Fieldset.Legend className={styles.fieldlegend}>
          Product Details
        </Fieldset.Legend>
        <ProductTitle hasError={hasError(state?.error, "title")} />
        <ProductDescription hasError={hasError(state?.error, "description")} />
        <ProductShortDescription />
        <ProductCategories
          categories={categories}
          hasError={hasError(state?.error, "categories")}
        />
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
