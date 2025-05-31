import { Field } from "@base-ui-components/react/field";

export default function ProductPrice() {
  return (
    <Field.Root>
      <Field.Label htmlFor="price">Price</Field.Label>
      <Field.Control
        required
        id="price"
        name="price"
        type="text"
        placeholder="0.00"
      />
    </Field.Root>
  );
}
