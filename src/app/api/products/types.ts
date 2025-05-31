import { z } from "zod/v4";

export const ImageSchema = z.object({
  name: z.string(),
  key: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  _id: z.string(),
  createdAt: z.string(),
});

export const ProductSchema = z.object({
  _id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  shortDescription: z.string(),
  price: z.number(),
  categories: z.string().array(),
  images: z.custom<Image>().array().optional(),
  discount: z.number().optional(),
  isPublished: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;
export type Image = z.infer<typeof ImageSchema>;
