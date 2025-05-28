"use server";

import { createProduct } from "@/app/api/products/requests";
import { ProductSchema, Product } from "@/app/api/products/types";
import { revalidatePath } from "next/cache";

export async function addProduct(
  prevState: { message: string },
  product: FormData,
) {
  const newProductSchema = ProductSchema.omit({ _id: true });

  const parse = newProductSchema.safeParse({
    title: product.get("title"),
    description: product.get("description"),
    shortDescription: product.get("short-description"),
    categories: product.getAll("categories[_id]"),
    price: Number(product.get("price")),
    images: product.get("product-image"),
    discount: Number(product.get("discount")),
    isPublished: true,
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
