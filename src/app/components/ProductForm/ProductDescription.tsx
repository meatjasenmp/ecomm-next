import { Field } from "@base-ui-components/react/field";

export default function ProductDescription() {
  return (
    <Field.Root>
      <Field.Label htmlFor="description">Description</Field.Label>
      <textarea id="description" name="description" rows={3} />
    </Field.Root>
  );
}
