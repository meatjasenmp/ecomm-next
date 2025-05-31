import React from "react";
import styles from "@/app/styles/components/sidebar.module.css";

export default function Sidebar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <aside className={styles.sidebar}>{children}</aside>;
}
