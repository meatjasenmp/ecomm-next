"use client";
import { useFormStatus } from "react-dom";

export default function ProductFormFooter() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button disabled={pending} type="submit">
        Save
      </button>
    </div>
  );
}
