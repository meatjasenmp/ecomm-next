import React, { useState } from "react";
import images from "@/app/styles/components/productImages.module.css";
import { PhotoIcon } from "@heroicons/react/20/solid";
import ImagePreview from "@/app/components/ProductForm/images/ProductImagePreview";

function ProductImage() {
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setImagePreview((prev) => [...prev, ...urls]);
  };

  return (
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
        {imagePreview[0] && <ImagePreview src={imagePreview[0]} />}
      </div>
    </div>
  );
}

export default ProductImage;
