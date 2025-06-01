import ProductTitle from "@/app/components/ProductForm/ProductTitle";
import ProductDescription from "@/app/components/ProductForm/ProductDescription";
import ProductShortDescription from "./ProductShortDescription";
import ProductCategories from "@/app/components/ProductForm/ProductCategories";
import { CategoriesProps } from "@/app/admin/page";
import { Fieldset } from "@base-ui-components/react/fieldset";
import styles from "@/app/styles/components/form.module.css";

// TODO: Loading State for Categories. Confirm this is the ideal pattern for requests.
export default function ProductDetails({ categories }: CategoriesProps) {
  return (
    <>
      <Fieldset.Root className={styles.fieldset}>
        <Fieldset.Legend className={styles.fieldlegend}>
          Product Details
        </Fieldset.Legend>
        <ProductTitle />
        <ProductShortDescription />
        <ProductDescription />
        <ProductCategories categories={categories} />
      </Fieldset.Root>
    </>
  );
}
