import { z } from "zod/v4";

export const ProductSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  shortDescription: z.string(),
  price: z.number(),
  categories: z.string().array(),
  images: z.custom<File>(),
  discount: z.number().optional(),
  isPublished: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;
