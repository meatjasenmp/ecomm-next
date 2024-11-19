import { parseStyles } from "@/app/helpers/styles";
import { inputStyles, labelStyles } from "@/app/components/ProductForm/styles";

export default function ProductDescription() {
  return (
    <div>
      <div className="mt-2">
        <label htmlFor="short-description" className={parseStyles(labelStyles)}>
          Short Description
        </label>
        <div className="mt-2">
          <textarea
            id="short-description"
            name="short-description"
            rows={2}
            className={parseStyles(inputStyles)}
          />
        </div>
      </div>
      <div className="mt-2">
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
    </div>
  );
}
