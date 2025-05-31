import { Field } from "@base-ui-components/react";
import { Fieldset } from "@base-ui-components/react/fieldset";

export default function ProductTitle() {
  return (
    <Fieldset.Root>
      <Field.Root>
        <Field.Label htmlFor="title">Product Title</Field.Label>
        <Field.Control
          id="title"
          name="title"
          type="text"
          placeholder="Air Jordan 1"
        />
      </Field.Root>
    </Fieldset.Root>
  );
}
