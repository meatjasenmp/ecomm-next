import React from "react";
import styles from "@/app/styles/components/container.module.css";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
