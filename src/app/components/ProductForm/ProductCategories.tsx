"use client";

import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Select } from "@base-ui-components/react/select";
import { CategoriesProps } from "@/app/admin/page";

export default function ProductCategories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <Select.Root
      value={selectedCategory}
      onValueChange={setSelectedCategory}
      name="categories"
    >
      <Select.Trigger>
        <Select.Value placeholder="Product Category" />
        <Select.Icon>
          <ChevronUpDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner sideOffset={8}>
          <Select.ScrollUpArrow />
          <Select.Popup>
            {categories.map((category) => (
              <Select.Item key={category._id} value={category}>
                <Select.ItemIndicator>
                  <CheckIcon aria-hidden="true" />
                </Select.ItemIndicator>
                <Select.ItemText>{category.name}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
          <Select.ScrollDownArrow />
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
