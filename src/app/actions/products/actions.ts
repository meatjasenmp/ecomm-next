"use server";

import {
  createProductRequest,
  uploadImagesRequest,
} from "@/app/api/products/requests";
import {
  ProductSchema,
  Product,
  Image,
  Category,
  ErrorProperties,
} from "@/app/api/products/types";
import { ZodError, ZodSafeParseResult } from "zod/v4";
import z from "zod/v4";

function parseFormData(form: FormData): ZodSafeParseResult<Product> {
  return ProductSchema.safeParse({
    title: form.get("title"),
    description: form.get("description"),
    shortDescription: form.get("short-description"),
    categories: form.getAll("categories"),
    images: form.get("images") ? [form.get("images")] : [],
    price: Number(form.get("price")),
    discount: Number(form.get("discount")),
    isPublished: true,
  });
}

async function getProductImages(images: File): Promise<Image[] | undefined> {
  try {
    return [await uploadImagesRequest(images)];
  } catch (error) {
    console.error("Error uploading images:", error);
  }
}

async function createProduct(
  product: Product,
): Promise<void | { message: string }> {
  try {
    await createProductRequest(product);
  } catch (error) {
    return { message: "Error creating product" };
  }
}

function getErrors(error: ZodError<Product>): ErrorProperties {
  const errors = z.treeifyError(error);
  console.info("Parsed errors:", errors.properties);
  return errors.properties;
}

export async function addProduct(
  prevState: { message: string },
  form: FormData,
) {
  const { success, error, data } = parseFormData(form);
  if (!success) {
    return { message: "Invalid Product", error: getErrors(error) };
  }

  const product = data as Product;
  const productImages = form.get("images") as File;
  product.images = (await getProductImages(productImages)) || [];

  await createProduct(product);
  return { message: "Product created successfully" };
}
