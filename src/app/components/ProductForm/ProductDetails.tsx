import ProductTitle from "@/app/components/ProductForm/ProductTitle";
import ProductDescription from "@/app/components/ProductForm/ProductDescription";
import ProductPrice from "@/app/components/ProductForm/ProductPrice";
import ProductDiscount from "@/app/components/ProductForm/ProductDiscount";
import ProductCategories from "@/app/components/ProductForm/ProductCategories";
import ProductPublished from "@/app/components/ProductForm/ProductPublished";

export default function ProductDetails() {
  return (
    <>
      <ProductTitle />
      <ProductDescription />
      <ProductPrice />
      <ProductDiscount />
      <ProductCategories />
      <ProductPublished />
    </>
  );
}
