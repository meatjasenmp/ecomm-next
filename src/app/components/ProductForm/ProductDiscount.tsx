import { Field } from "@base-ui-components/react/field";

export default function ProductDiscount() {
  return (
    <Field.Root>
      <Field.Label htmlFor="price">Product Discount</Field.Label>
      <Field.Control
        id="discount"
        name="discount"
        type="text"
        placeholder="0.00"
      />
    </Field.Root>
  );
}
