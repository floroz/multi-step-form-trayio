import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode | string;
  primary?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset";
  ariaLabel?: string;
}

const Button = (props: Props) => {
  return (
    <button
      className={`${styles.button} ${props.primary && styles.primary}`}
      onClick={props.onClick}
      type={props.type || "button"}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};

export default Button;
