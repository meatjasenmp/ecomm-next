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
import { Category } from "@/app/api/categories/types";

import { parseStyles } from "@/app/helpers/styles";
import {
  labelStyles,
  listBoxButtonStyles,
  listBoxCheckIcon,
  listBoxChevronContainer,
  listBoxOptionsStyles,
  listBoxOptionStyles,
  listBoxOptionValueStyles,
} from "@/app/components/ProductForm/styles";

interface ProductCategoriesProps {
  categories: Category[];
}

export default function ProductCategories({
  categories,
}: ProductCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  return (
    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <Label className={parseStyles(labelStyles)}>Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className={parseStyles(listBoxButtonStyles)}>
          <span className="block truncate">{selectedCategory}</span>
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
              value={category.name}
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
