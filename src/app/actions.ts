"use server";
import { createProduct } from "@/app/api/requests";
import { ProductSchema, Product } from "@/app/api/types";

export async function addProduct(product: FormData) {
  const newProductSchema = ProductSchema.omit({ _id: true });
  const parse = newProductSchema.safeParse(product);

  if (!parse.success) return { message: "Invalid Product Schema" };

  const data = parse.data as Product;

  try {
    return await createProduct(data);
  } catch (err) {
    return { message: "Failed to create Product", error: err };
  }
}
