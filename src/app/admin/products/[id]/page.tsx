import EditProductForm from "@/app/components/ProductForm/EditProductForm";
import { Category } from "@/app/api/categories/types";
import { getProductRequest } from "@/app/api/products/requests";
import { Product } from "@/app/api/products/types";

export interface CategoriesProps {
  categories: Category[];
}

type EditPageProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function Page({ searchParams }: EditPageProps) {
  const { id } = await searchParams;

  const product = (await getProductRequest(id)) as Product;

  return <EditProductForm product={product} />;
}
