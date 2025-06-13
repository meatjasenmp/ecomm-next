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
import { ca } from "zod/v4/locales";

function parseCategories(categories: string[]): Category[] {
  console.info("Parsing Categories:", categories);
  return categories.map((category) => {
    try {
      return JSON.parse(category) as Category;
    } catch (error) {
      console.error("Error parsing category:", error);
      return { _id: "", name: "", description: "" };
    }
  });
}

function parseFormData(form: FormData): ZodSafeParseResult<Product> {
  const categories = parseCategories(form.getAll("categories") as string[]);
  console.info("Parsed Categories:", categories);
  return ProductSchema.safeParse({
    title: form.get("title"),
    description: form.get("description"),
    shortDescription: form.get("short-description"),
    categories: form.getAll("categories") as string[],
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
  product.images = await getProductImages(productImages);
  product.categories = parseCategories(form.getAll("categories") as string[]);

  await createProduct(product);
  return { message: "Product created successfully" };
}
