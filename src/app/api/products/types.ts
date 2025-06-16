import { z } from "zod/v4";
import { parseCategories } from "../categories/utilities";

export const ImageSchema = z.object({
  name: z.string(),
  key: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  _id: z.string(),
  createdAt: z.string(),
});

export const CategorySchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
});

export const ProductSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(5, "A Product title is required"),
  description: z.string().min(10, "A Product description is required"),
  shortDescription: z.string().optional(),
  categories: z
    .custom<Category>()
    .array()
    .transform((categories) => parseCategories(categories)),
  images: z.custom<Image>().array(),
  price: z
    .number()
    .gt(0, "A Product price is required")
    .min(0, "Price must be a positive number"),
  discount: z.number().min(0, "Price must be a positive number").optional(),
  isPublished: z.boolean(),
});

export type ErrorProperties =
  | {
      [key: string]: {
        errors: string[];
      };
    }
  | undefined;

export type Product = z.infer<typeof ProductSchema>;
export type Image = z.infer<typeof ImageSchema>;
export type Category = z.infer<typeof CategorySchema>;
