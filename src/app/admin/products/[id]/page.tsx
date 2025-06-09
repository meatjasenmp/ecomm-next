import EditProductForm from "@/app/components/ProductForm/EditProductForm";
import { Category } from "@/app/api/categories/types";

export interface CategoriesProps {
  categories: Category[];
}

type EditPageProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function Page({ searchParams }: EditPageProps) {
  const { id } = await searchParams;
  return <EditProductForm id={id} />;
}
