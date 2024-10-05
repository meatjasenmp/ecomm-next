import React from "react";
import { parseStyles } from "@/app/helpers/styles";

const sidebarStyles = {
  layout: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2",
  position: "sticky top-0",
  spacing: "py-5",
  appearance: "bg-white shadow-md",
  size: "h-screen",
};

export default function Sidebar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <aside className={parseStyles(sidebarStyles)}>{children}</aside>;
}
