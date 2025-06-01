"use client";
import { useFormStatus } from "react-dom";
import Button from "@/app/components/Button";

export default function ProductFormFooter() {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button disabled={pending} type="submit">
        Save
      </Button>
    </div>
  );
}
