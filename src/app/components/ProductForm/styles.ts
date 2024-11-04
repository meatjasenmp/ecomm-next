export const inputStyles = {
  display: "block",
  size: "w-full",
  spacing: "py-1.5",
  appearance:
    "ring-gray-300 ring-1 ring-inset rounded-md shadow-sm, rounded-md border-0",
  focus: "focus:ring-2 focus:ring-inset focus:ring-indigo-600",
  font: "sm:text-sm sm:leading-6 text-gray-900",
  placeholder: "placeholder:text-gray-400",
};

export const labelStyles = {
  display: "block",
  font: "text-sm font-medium leading-6 text-gray-900",
};

export const leadingAddOns = {
  display: "flex",
  position: "absolute items-center",
  pointerEvents: "pointer-events-none",
  appearance: "inset-y-0",
  span: "text-gray-500 sm:text-sm",
};

export const listBoxButtonStyles = {
  size: inputStyles.size,
  position: "relative",
  appearance:
    "ring-gray-300 ring-1 ring-inset rounded-md shadow-sm, rounded-md border-0",
  cursor: "cursor-default",
  spacing: "py-1.5 pl-3 pr-10",
  font: `text-gray-900 sm:text-sm/6 text-left`,
  focus:
    "focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none",
  height: "max-h-60",
};

export const listBoxOptionsStyles = {
  size: inputStyles.size,
  position: "absolute",
  zIndex: "z-10",
  spacing: "mt-1",
  height: "max-h-60",
  overflow: "overflow-auto",
  appearance: "rounded-md shadow-lg ring-1 ring-black ring-opacity-5",
  background: "bg-white",
  font: "text-base sm:text-sm",
  focus: "focus:outline-none",
  dataClosed: "data-[closed]:data-[leave]:opacity-0",
  dataLeave:
    "data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in",
};

export const listBoxOptionStyles = {
  position: "group relative",
  cursor: "cursor-default",
  select: "select-none",
  spacing: "py-2 pl-8 pr-4",
  dataFocus: "data-[focus]:bg-indigo-600 data-[focus]:text-white",
};

export const listBoxOptionValueStyles = {
  display: "block",
  font: "font-normal truncate",
  groupData: "group-data-[selected]:font-semibold",
};

export const listBoxCheckIcon = {
  position: "absolute inset-y-0 left-0  pl-1.5",
  font: "text-indigo-600",
  spacing: "pl-1.5",
  display: "flex items-center",
  groupData: "group-data-[focus]:text-white",
  groupNotData: "[.group:not([data-selected])_&]:hidden",
};

export const listBoxChevronContainer = {
  position: "absolute inset-y-0 right-0",
  display: "flex items-center",
  spacing: "pr-2",
  pointerEvents: "pointer-events-none",
};
