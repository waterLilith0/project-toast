import React from "react";

import styles from "./Button.module.css";
import { EnableContext } from "../ToastPlayground";

function Button({ className = "", ...delegated }) {
  const { enabled, setEnabled } = React.use(EnableContext);

  return (
    <button
      onClick={() => {setEnabled(true)}}
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default Button;
