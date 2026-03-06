import React from "react";

import styles from "./Button.module.css";
import { StackContext } from "../ToastPlayground";

function Button({ className = "", ...delegated }) {
  const { stack, setStack } = React.use(StackContext);
  console.log(stack);
  return (
    <button
      onClick={() => {
        setStack();
      }}
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default Button;
