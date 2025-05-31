"use client";

import Form from "next/form";
import { useActionState } from "react";
import { addProduct } from "@/app/actions/products/actions";
import ProductFormHeader from "@/app/components/ProductForm/ProductFormHeader";
import ProductDetails from "@/app/components/ProductForm/ProductDetails";
import ProductFormFooter from "@/app/components/ProductForm/ProductFormFooter";
import { CategoriesProps } from "@/app/admin/page";

const initialState = {
  message: "",
};

export default function ProductForm({ categories }: CategoriesProps) {
  const [state, formAction] = useActionState(addProduct, initialState);

  return (
    <Form action={formAction}>
      <ProductFormHeader />
      <ProductDetails categories={categories} />
      <ProductFormFooter />
      {state?.message}
    </Form>
  );
}
