import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { StackContext } from "../ToastPlayground";

function ToastShelf() {
  const { stack } = React.useContext(StackContext);

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
