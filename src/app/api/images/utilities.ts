import { Image } from "./types";

export function refineImageFiles(images: (Image | File)[]): boolean {
  return images.every((image) => image instanceof File && image.size > 0);
}
