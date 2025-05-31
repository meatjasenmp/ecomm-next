import { Product, Image } from "./types";

const headers = {
  "Content-Type": "application/json",
};

export async function fetchProducts() {
  const response = await fetch(process.env.API_URL!, {
    cache: "no-store",
  });
  return (await response.json()) as Product[];
}

export async function uploadImages(images: File) {
  const formData = new FormData();
  formData.append("images", images);
  const response = await fetch(`${process.env.API_URL}/upload-images`, {
    method: "POST",
    body: formData,
  });
  return (await response.json()) as Image;
}

export async function createProduct(body: Product) {
  const response = await fetch(`${process.env.API_URL}/create-product`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  return (await response.json()) as Product;
}
