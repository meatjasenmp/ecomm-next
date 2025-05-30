"use server";

import { createProduct, uploadImages } from "@/app/api/products/requests";
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
    images: product.get("images"),
    discount: Number(product.get("discount")),
    isPublished: true,
  });

  if (!parse.success) return { message: "Invalid Product Schema" };

  const data = parse.data as Product;

  try {
    // Upload images to S3 and get the URLs
    const images = product.get("images") as File;
    await uploadImages(images);
    await createProduct(data);
    revalidatePath("/admin");
    return { message: "Product created successfully" };
  } catch (err) {
    console.error("Error creating product:", err);
    return { message: "Failed to create Product", error: err };
  }
}
