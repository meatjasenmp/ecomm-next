import { Field } from "@base-ui-components/react/field";
import { PhotoIcon } from "@heroicons/react/20/solid";
import Grid from "@/app/components/Grid";
import styles from "@/app/styles/components/form.module.css";
import images from "@/app/styles/components/productImages.module.css";

export default function ProductImages() {
  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="images" className={styles.fieldlabel}>
        Product Images
      </Field.Label>
      <Grid>
        <div className={images.container}>
          <PhotoIcon className={images.icon} />
          <div className={images.inputContainer}>
            <input id="images" name="images" type="file" />
          </div>
        </div>
        <div className={images.container}>
          <PhotoIcon className={images.icon} />
          <div className={images.inputContainer}>
            <input id="images" name="images" type="file" />
          </div>
        </div>
        <div className={images.container}>
          <PhotoIcon className={images.icon} />
          <div className={images.inputContainer}>
            <input id="images" name="images" type="file" />
          </div>
        </div>
      </Grid>
    </Field.Root>
  );
}
