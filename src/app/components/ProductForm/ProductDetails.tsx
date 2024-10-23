import ProductTitle from "@/app/components/ProductForm/ProductTitle";
import ProductDescription from "@/app/components/ProductForm/ProductDescription";
import ProductPrice from "@/app/components/ProductForm/ProductPrice";
import ProductCategories from "@/app/components/ProductForm/ProductCategories";

export default function ProductDetails() {
  return (
    <>
      <ProductTitle />
      <ProductDescription />
      <ProductPrice />
      <ProductCategories />
    </>
  );
}
