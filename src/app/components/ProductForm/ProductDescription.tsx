import { parseStyles } from "@/app/helpers/styles";
import { inputStyles, labelStyles } from "@/app/components/ProductForm/styles";

export default function ProductDescription() {
  return (
    <div>
      <label htmlFor="description" className={parseStyles(labelStyles)}>
        Description
      </label>
      <div className="mt-2">
        <textarea
          id="description"
          name="description"
          rows={3}
          className={parseStyles(inputStyles)}
        />
      </div>
    </div>
  );
}
