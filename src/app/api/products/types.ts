import { z } from "zod";

const ImageSchema = z.object({
  url: z.string(),
  isPrimary: z.boolean().optional(),
  _id: z.string().optional(),
});

export const ProductSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  shortDescription: z.string(),
  price: z.number(),
  categories: z.string().array(),
  // images: ImageSchema.array(),
  discount: z.number().optional(),
  isPublished: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;
