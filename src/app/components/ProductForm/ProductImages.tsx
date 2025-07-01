import { Field } from "@base-ui-components/react/field";
import { PhotoIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Grid from "@/app/components/Grid";
import styles from "@/app/styles/components/form.module.css";
import images from "@/app/styles/components/productImages.module.css";

function ImagePreview({ src }: { src: string }) {
  return (
    <div className={images.previewContainer}>
      <img src={src} alt="Preview" className={images.preview} />
    </div>
  );
}

export default function ProductImages() {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...urls]);
  };

  return (
    <Field.Root className={styles.fieldroot}>
      <Field.Label htmlFor="images" className={styles.fieldlabel}>
        Product Images
      </Field.Label>
      <Grid>
        <div className={images.container}>
          <PhotoIcon className={images.icon} />
          <div className={images.inputContainer}>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreviews[0] && <ImagePreview src={imagePreviews[0]} />}
          </div>
        </div>
        <div className={images.container}>
          <PhotoIcon className={images.icon} />
          <div className={images.inputContainer}>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreviews[1] && <ImagePreview src={imagePreviews[1]} />}
          </div>
        </div>
        <div className={images.container}>
          <PhotoIcon className={images.icon} />
          <div className={images.inputContainer}>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreviews[2] && <ImagePreview src={imagePreviews[2]} />}
          </div>
        </div>
      </Grid>
    </Field.Root>
  );
}
