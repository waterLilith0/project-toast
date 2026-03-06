import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { StackContext } from "../ToastPlayground";

function ToastShelf({ children }) {
  const { stack } = React.useContext(StackContext);

  return (
    <ol className={styles.wrapper}>
      {[...stack].map((item) => {
        // return item;
      })}
      {console.log(stack)}
      <li className={styles.toastWrapper}>
        <Toast variant="notice">{children}</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
