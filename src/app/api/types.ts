import { z } from "zod";

const ImageSchema = z.object({
  url: z.string(),
  isPrimary: z.boolean().optional(),
  _id: z.string().optional(),
});

const ProductSchema = z.object({
  _id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  category_ids: z.array(z.string()),
  images: ImageSchema.array(),
  discount: z.number().optional(),
  isPublished: z.boolean(),
});

export type ProductSchema = z.infer<typeof ProductSchema>;
