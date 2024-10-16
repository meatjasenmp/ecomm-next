export interface ImageInterface {
  url: string;
  isPrimary?: boolean;
  _id?: string;
}

export interface ProductInterface {
  _id?: string;
  title: string;
  description: string;
  price: number;
  category_ids: string[];
  images: ImageInterface[];
  discount?: number;
  isPublished: boolean;
}
