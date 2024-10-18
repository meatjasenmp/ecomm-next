import { Product } from "./types";

const headers = {
  "Content-Type": "application/json",
};

export async function fetchProducts() {
  const response = await fetch(process.env.API_URL!, {
    cache: "no-store",
    headers,
  });
  return (await response.json()) as Product[];
}

export async function createProduct(body: Product) {
  const response = await fetch(`${process.env.API_URL}/create-product`, {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });
  return (await response.json()) as Product;
}
