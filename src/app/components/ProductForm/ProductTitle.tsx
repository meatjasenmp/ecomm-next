import { parseStyles } from "@/app/helpers/styles";
import { inputStyles, labelStyles } from "@/app/components/ProductForm/styles";

export default function ProductTitle() {
  return (
    <div>
      <label htmlFor="title" className={parseStyles(labelStyles)}>
        Product Title
      </label>
      <div className="mt-2">
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Air Jordan 1"
          className={parseStyles(inputStyles)}
        />
      </div>
    </div>
  );
}
