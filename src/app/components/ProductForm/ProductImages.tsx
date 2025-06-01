import { Field } from "@base-ui-components/react/field";
import { PhotoIcon } from "@heroicons/react/20/solid";
import styles from "@/app/styles/components/form.module.css";
import images from "@/app/styles/components/productImages.module.css";

export default function ProductImages() {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="images" className={styles.fieldlabel}>
        Product Images
      </Field.Label>
      <div className={images.container}>
        <PhotoIcon className={images.icon} />
        <div>
          <input id="images" name="images" type="file" />
        </div>
      </div>
    </Field.Root>
  );
}
