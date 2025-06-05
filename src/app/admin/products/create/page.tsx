import ProductForm from "@/app/components/ProductForm/ProductForm";
import { fetchCategories } from "@/app/api/categories/requests";
import { Category } from "@/app/api/categories/types";

export interface CategoriesProps {
  categories: Category[];
}

export default async function Page() {
  const categories = await fetchCategories();

  return <ProductForm categories={categories} />;
}
