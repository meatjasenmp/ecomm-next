import { parseStyles } from "@/app/helpers/styles";
import {
  containerStyles,
  inputStyles,
  labelStyles,
} from "@/app/components/ProductForm/styles";

export default function ProductDetails() {
  return (
    <>
      <div className="sm:col-span-4">
        <label htmlFor="title" className={parseStyles(labelStyles)}>
          Product Title
        </label>
        <div className="mt-2">
          <div className={parseStyles(containerStyles)}>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Air Jordan 1"
              className={parseStyles(inputStyles)}
            />
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="description" className={parseStyles(labelStyles)}>
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            name="description"
            rows={3}
            className={parseStyles(inputStyles)}
            defaultValue={""}
          />
        </div>
      </div>
    </>
  );
}
