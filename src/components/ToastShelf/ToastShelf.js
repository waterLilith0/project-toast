import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { stack } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {stack &&
        [...stack].map((item) => {
          return item;
        })}
    </ol>
  );
}

export default ToastShelf;
