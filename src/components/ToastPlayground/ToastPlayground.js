import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
export const StackContext = React.createContext();

function ToastPlayground() {
  const [input, setInput] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [stack, setStack] = React.useState([]);

  const push = React.useCallback(
    (element) => {
      setStack([...stack, element]);
    },
    [stack],
  );

  const pop = React.useCallback(() => {
    const element = stack[stack.length];
    return element;
  }, [stack]);

  function createElement({ variant, children }) {
    return (
      <li className={styles.toastWrapper} key={crypto.randomUUID()}>
        <Toast variant="notice">{children}</Toast>
      </li>
    );
  }

  return (
    <StackContext
      value={{ stack, variant, setStack, push, pop, createElement }}
    >
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        {/* {enabled && <Toast variant={variant} setEnabled={setEnabled}></Toast>} */}
        <ToastShelf stack={stack} setStack={setStack}>
          Test
        </ToastShelf>

        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>

            {VARIANT_OPTIONS.map((name) => {
              const cryptoId = crypto.randomUUID();
              return (
                <div
                  className={`${styles.inputWrapper} 
                  ${styles.radioWrapper}`}
                  value={variant}
                  key={cryptoId}
                >
                  <label htmlFor="variant-notice">
                    <input
                      id={`variant-${name}`}
                      type="radio"
                      name="variant"
                      onChange={(option) => {
                        setVariant(name);
                      }}
                      checked={variant === name}
                    />
                    {name}
                  </label>
                </div>
              );
            })}
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </div>
    </StackContext>
  );
}

export default ToastPlayground;
