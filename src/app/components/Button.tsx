import React from "react";
import styles from "@/app/styles/components/button.module.css";
import classNames from "classnames";

export type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: [key: string];
};

export default function Button({
  children,
  type = "button",
  onClick,
  disabled,
  className,
}: ButtonProps) {
  const classes = classNames(styles.button, className);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
