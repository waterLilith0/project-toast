import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { StackContext } from "../ToastPlayground";

function ToastShelf({ children }) {
  const { stack, setStack } = React.useContext(StackContext);
  const push = React.useCallback((element) => {
    setStack([...stack, element]);
  }, []);

  const pop = React.useCallback(() => {
    const element = stack.last();
    return element;
  });

  function createElement({ variant, children }) {
    return (
      <li className={styles.toastWrapper} key={crypto.randomUUID()}>
        <Toast variant="notice">{children}</Toast>
      </li>
    );
  }

  React.useEffect(() => {
    push(createElement("notice"));
  }, []);

  return (
    <ol className={styles.wrapper}>
      {[...stack].map((item) => {
        return item;
      })}
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
