import images from "@/app/styles/components/productImages.module.css";
import React from "react";

function ImagePreview({ src }: { src: string }) {
  return (
    <div className={images.previewContainer}>
      <img src={src} alt="Preview" className={images.preview} />
    </div>
  );
}

export default ImagePreview;
