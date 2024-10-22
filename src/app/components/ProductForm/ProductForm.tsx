import ProductFormHeader from "@/app/components/ProductForm/ProductFormHeader";
import ProductDetails from "@/app/components/ProductForm/ProductDetails";
import ProductImages from "@/app/components/ProductForm/ProductImages";
import ProductFormFooter from "@/app/components/ProductForm/ProductFormFooter";

export default function ProductForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <ProductFormHeader />
          <ProductDetails />
          <ProductImages />
        </div>
      </div>
      <ProductFormFooter />
    </form>
  );
}
