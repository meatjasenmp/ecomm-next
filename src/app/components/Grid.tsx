import React from "react";
import styles from "@/app/styles/components/grid.module.css";
import classNames from "classnames";

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Grid({ children, className }: GridProps) {
  return <div className={classNames(styles.grid, className)}>{children}</div>;
}
