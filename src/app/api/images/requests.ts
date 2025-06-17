import { Image } from "@/app/api/images/types";

export async function uploadImagesRequest(images: File) {
  const formData = new FormData();
  formData.append("images", images);
  const response = await fetch(`${process.env.API_URL}/upload-images`, {
    method: "POST",
    body: formData,
  });
  return (await response.json()) as Image;
}
