"use server";

import { createProduct, uploadImages } from "@/app/api/products/requests";
import { ProductSchema, Product, Image } from "@/app/api/products/types";
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
    discount: Number(product.get("discount")),
    isPublished: true,
  });

  if (!parse.success) return { message: "Invalid Product Schema" };

  const data = parse.data as Product;
  const images = product.get("images") as File;

  const productImages = async (): Promise<
    Image | [] | { message: string; error: unknown }
  > => {
    try {
      const img = await uploadImages(images);
      return img;
    } catch (error) {
      console.error("Error uploading images:", error);
      return { message: "Failed to upload images", error };
    }
  };

  const create = async (): Promise<{ message: string; error?: unknown }> => {
    try {
      let imagesResponse = await productImages();
      if ("message" in imagesResponse) {
        imagesResponse ? (imagesResponse = []) : imagesResponse;
      }
      console.log("Image upload response:", imagesResponse);
      data.images = imagesResponse as Image[];
      await createProduct(data);
      revalidatePath("/admin");
      return { message: "Product created successfully" };
    } catch (err) {
      console.error("Error creating product:", err);
      return { message: "Failed to create Product", error: err };
    }
  };

  await create();
}
