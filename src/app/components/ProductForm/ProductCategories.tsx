"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  labelStyles,
  listBoxButtonStyles,
  listBoxCheckIcon,
  listBoxChevronContainer,
  listBoxOptionsStyles,
  listBoxOptionStyles,
  listBoxOptionValueStyles,
} from "@/app/components/ProductForm/styles";
import { parseStyles } from "@/app/helpers/styles";
import { CategoriesProps } from "@/app/admin/page";

export default function ProductCategories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <Listbox
      value={selectedCategory}
      onChange={setSelectedCategory}
      name="categories"
    >
      <Label className={parseStyles(labelStyles)}>Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className={parseStyles(listBoxButtonStyles)}>
          <span className="block truncate">{selectedCategory.name}</span>
          <span className={parseStyles(listBoxChevronContainer)}>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className={parseStyles(listBoxOptionsStyles)}
        >
          {categories.map((category) => (
            <ListboxOption
              key={category._id}
              value={category}
              className={parseStyles(listBoxOptionStyles)}
            >
              <span className={parseStyles(listBoxOptionValueStyles)}>
                {category.name}
              </span>

              <span className={parseStyles(listBoxCheckIcon)}>
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
