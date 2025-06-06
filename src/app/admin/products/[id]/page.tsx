import EditProductForm from "@/app/components/ProductForm/EditProductForm";
import { fetchCategories } from "@/app/api/categories/requests";
import { Category } from "@/app/api/categories/types";

export interface CategoriesProps {
  categories: Category[];
}

export default async function Page() {
  const categories = await fetchCategories();

  return <EditProductForm categories={categories} />;
}
