import { Product } from "./types";

export async function fetchProducts() {
  const response = await fetch(process.env.API_URL!, {
    cache: "no-store",
  });
  return (await response.json()) as Product[];
}

export async function createProduct(body: Product) {
  const response = await fetch(`${process.env.API_URL}/create-product`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return (await response.json()) as Product;
}
