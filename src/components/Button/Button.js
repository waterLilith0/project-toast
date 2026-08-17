import React from "react";

import styles from "./Button.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function Button({ className = "", ...delegated }) {
  const { push, createElement, variant, setInput, setVariant } =
    React.useContext(ToastContext);
  return (
    <button
      onClick={() => {
        push(createElement({ variant: variant }));
        setInput("");
        setVariant("notice");
      }}
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default Button;
