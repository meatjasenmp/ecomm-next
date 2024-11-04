"use server";

import { createProduct } from "@/app/api/products/requests";
import { ProductSchema, Product } from "@/app/api/products/types";
import { revalidatePath } from "next/cache";

export async function addProduct(
  prevState: {
    message: string;
  },
  product: FormData,
) {
  const newProductSchema = ProductSchema.omit({ _id: true });
  const parse = newProductSchema.safeParse({
    title: product.get("title"),
    description: product.get("description"),
    price: product.get("price"),
    category_ids: product.getAll("categories"),
    images: product.getAll("images"),
    discount: product.get("discount"),
    isPublished: product.get("isPublished"),
  });

  if (!parse.success) return { message: "Invalid Product Schema" };

  const data = parse.data as Product;

  try {
    await createProduct(data);
    revalidatePath("/admin");
    return { message: "Product created successfully" };
  } catch (err) {
    return { message: "Failed to create Product", error: err };
  }
}
