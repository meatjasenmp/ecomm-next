import { Field } from "@base-ui-components/react/field";

export default function ProductShortDescription() {
  return (
    <Field.Root>
      <Field.Label htmlFor="short-description">Short Description</Field.Label>
      <textarea id="short-description" name="short-description" rows={2} />
    </Field.Root>
  );
}
