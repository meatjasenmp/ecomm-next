export const containerStyles = {
  display: "flex",
  appearance: "ring-gray-300 ring-1 ring-inset rounded-md shadow-sm",
  size: "sm:max-w-md",
};

export const inputStyles = {
  display: "block",
  size: "w-full",
  spacing: "py-1.5",
  appearance: `${containerStyles.appearance}, rounded-md border-0`,
  focus: "focus:ring-2 focus:ring-inset focus:ring-indigo-600",
  font: "sm:text-sm sm:leading-6 text-gray-900",
  placeholder: "placeholder:text-gray-400",
};

export const labelStyles = {
  display: "block",
  font: "text-sm font-medium leading-6 text-gray-900",
};
