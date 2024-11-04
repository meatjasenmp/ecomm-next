import ProductTitle from "@/app/components/ProductForm/ProductTitle";
import ProductDescription from "@/app/components/ProductForm/ProductDescription";
import ProductPrice from "@/app/components/ProductForm/ProductPrice";
import ProductDiscount from "@/app/components/ProductForm/ProductDiscount";
import ProductCategories from "@/app/components/ProductForm/ProductCategories";
import ProductPublished from "@/app/components/ProductForm/ProductPublished";
import { CategoriesProps } from "@/app/admin/page";

// TODO: Loading State for Categories. Confirm this is the ideal pattern for requests.
export default function ProductDetails({ categories }: CategoriesProps) {
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
