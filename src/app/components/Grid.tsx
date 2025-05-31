import React from "react";
import styles from "@/app/styles/components/grid.module.css";

export default function Grid({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
