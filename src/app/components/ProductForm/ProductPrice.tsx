import { parseStyles } from "@/app/helpers/styles";
import {
  inputStyles,
  labelStyles,
  leadingAddOns,
} from "@/app/components/ProductForm/styles";

export default function ProductPrice() {
  return (
    <div>
      <label htmlFor="price" className={parseStyles(labelStyles)}>
        Price
      </label>
      <div className="mt-2 relative">
        <div className={`${parseStyles(leadingAddOns)} left-0 pl-3`}>
          <span className={leadingAddOns.span}>$</span>
        </div>
        <input
          id="price"
          name="price"
          type="text"
          placeholder="0.00"
          className={`${parseStyles(inputStyles)} pl-7`}
        />
        <div className={`${parseStyles(leadingAddOns)} right-0 pr-3`}>
          <span id="price-currency" className={leadingAddOns.span}>
            USD
          </span>
        </div>
      </div>
    </div>
  );
}