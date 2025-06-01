"use client";

import Form from "next/form";
import { useActionState } from "react";
import { addProduct } from "@/app/actions/products/actions";
import ProductFormHeader from "@/app/components/ProductForm/ProductFormHeader";
import ProductDetails from "@/app/components/ProductForm/ProductDetails";
import ProductFormFooter from "@/app/components/ProductForm/ProductFormFooter";
import ProductPrice from "@/app/components/ProductForm/ProductPrice";
import ProductDiscount from "@/app/components/ProductForm/ProductDiscount";
import ProductImages from "@/app/components/ProductForm/ProductImages";
import { CategoriesProps } from "@/app/admin/page";
import styles from "@/app/styles/components/form.module.css";

const initialState = {
  message: "",
};

export default function ProductForm({ categories }: CategoriesProps) {
  const [state, formAction] = useActionState(addProduct, initialState);

  return (
    <Form action={formAction} className={styles.form}>
      <ProductFormHeader />
      <ProductDetails categories={categories} />
      <ProductImages />
      <ProductPrice />
      <ProductDiscount />
      <ProductFormFooter />
      {state?.message}
    </Form>
  );
}
