"use server";

import {
  createProductRequest,
  uploadImagesRequest,
} from "@/app/api/products/requests";
import { ProductSchema, Product, Image } from "@/app/api/products/types";

async function productImages(images: File): Promise<Image[] | undefined> {
  try {
    return [await uploadImagesRequest(images)];
  } catch (error) {
    console.error("Error uploading images:", error);
  }
}

async function createProduct(product: Product): Promise<void> {
  try {
    await createProductRequest(product);
  } catch (error) {
    console.error("Error creating product:", error);
  }
}

export async function addProduct(
  prevState: { message: string },
  form: FormData,
) {
  const newProductSchema = ProductSchema.omit({ _id: true });
  const parse = newProductSchema.safeParse({
    title: form.get("title"),
    description: form.get("description"),
    shortDescription: form.get("short-description"),
    categories: form.getAll("categories[_id]"),
    price: Number(form.get("price")),
    discount: Number(form.get("discount")),
    isPublished: true,
  });

  if (!parse.success) return { message: "Invalid Product Schema" };
  const product = parse.data as Product;
  product.images = await productImages(form.get("images") as File);

  await createProduct(product);
  return { message: "Product created successfully" };
}
