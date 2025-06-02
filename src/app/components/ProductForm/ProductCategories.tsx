"use client";

import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Select } from "@base-ui-components/react/select";
import { CategoriesProps } from "@/app/admin/create/page";
import styles from "@/app/styles/components/form.module.css";

export default function ProductCategories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <Select.Root
      value={selectedCategory}
      onValueChange={setSelectedCategory}
      name="categories"
    >
      <Select.Trigger className={styles.select}>
        <Select.Value placeholder="Product Category" />
        <Select.Icon>
          <ChevronUpDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.ScrollUpArrow />
          <Select.Popup className={styles.popup}>
            {categories.map((category) => (
              <Select.Item
                key={category._id}
                value={category}
                className={styles.item}
              >
                <Select.ItemIndicator className={styles.itemindicator}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.itemindicatoricon}
                  />
                </Select.ItemIndicator>
                <Select.ItemText className={styles.itemtext}>
                  {category.name}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
          <Select.ScrollDownArrow />
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
