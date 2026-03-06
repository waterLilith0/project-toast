import React from "react";

import styles from "./Button.module.css";
import { StackContext } from "../ToastPlayground";

function Button({ className = "", ...delegated }) {
  const { stack, push, createElement, variant } = React.use(StackContext);
  console.log(stack);
  return (
    <button
      onClick={() => {
        push(createElement({ variant: variant, children: "This is a test" }));
      }}
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default Button;
