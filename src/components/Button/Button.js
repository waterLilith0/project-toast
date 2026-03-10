import React from "react";

import styles from "./Button.module.css";
import { StackContext } from "../ToastPlayground";

function Button({ className = "", setInput, setVariant, ...delegated }) {
  const { push, createElement, variant } = React.useContext(StackContext);
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
