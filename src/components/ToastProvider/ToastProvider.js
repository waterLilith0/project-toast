import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";
import Toast from "../Toast/Toast";

export const ToastContext = React.createContext({
  input: "",
  variant: "notice",
  stack: [],
  setInput: () => {},
  setStack: () => {},
  setVariant: () => {},
  push: () => {},
  pop: () => {},
  createElement: () => null,
});

function ToastProvider({ children }) {
  const [input, setInput] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [stack, setStack] = React.useState([]);

  const push = React.useCallback(
    (element) => {
      stack ? setStack([...stack, element]) : setStack([element]);
    },
    [stack],
  );

  const pop = React.useCallback(
    (id) => {
      let tempStack;
      [...stack].forEach((element) => {
        if (
          tempStack === undefined &&
          element.key === id &&
          !(stack.length > 1)
        ) {
          return;
        }
        if (tempStack === undefined && element.key !== id) {
          tempStack = [element];
        } else if (tempStack !== undefined && element.key !== id) {
          tempStack = [...tempStack, element];
        }
      });
      setStack(tempStack);
      tempStack = [];
    },
    [stack],
  );

  function createElement({ variant }) {
    const id = crypto.randomUUID();
    return (
      <li className={styles.toastWrapper} key={id} id={id}>
        <Toast variant={variant}>{input}</Toast>
      </li>
    );
  }
  return (
    <ToastContext.Provider
      value={{
        input,
        stack,
        variant,
        setInput,
        setStack,
        setVariant,
        push,
        pop,
        createElement,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
