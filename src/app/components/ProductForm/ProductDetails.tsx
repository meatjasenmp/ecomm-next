import ProductTitle from "@/app/components/ProductForm/ProductTitle";
import ProductDescription from "@/app/components/ProductForm/ProductDescription";
import ProductPrice from "@/app/components/ProductForm/ProductPrice";
import ProductDiscount from "@/app/components/ProductForm/ProductDiscount";
import ProductCategories from "@/app/components/ProductForm/ProductCategories";
import ProductPublished from "@/app/components/ProductForm/ProductPublished";
import { fetchCategories } from "@/app/api/categories/requests";

export default async function ProductDetails() {
  const categories = await fetchCategories();

  return (
    <>
      <ProductTitle />
      <ProductDescription />
      <ProductPrice />
      <ProductDiscount />
      <ProductCategories categories={categories} />
      <ProductPublished />
    </>
  );
}
