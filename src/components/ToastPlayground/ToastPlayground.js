import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
export const EnableContext = React.createContext();

function ToastPlayground() {
  const [input, setInput] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [enabled, setEnabled] = React.useState(false);

  return (
    <EnableContext value={{ enabled, setEnabled }}>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        {/* {enabled && <Toast variant={variant} setEnabled={setEnabled}></Toast>} */}
        <ToastShelf>Test</ToastShelf>

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
    </EnableContext>
  );
}

export default ToastPlayground;
