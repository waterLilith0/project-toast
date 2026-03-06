import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import { StackContext } from "../ToastPlayground";
import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children }) {
  const [type, setType] = React.useState("notice");
  const Icon = ICONS_BY_VARIANT[variant];

  React.useEffect(() => {
    if (variant) {
      if (variant === "notice") {
        setType(styles.notice);
      }
      if (variant === "warning") {
        setType(styles.warning);
      }
      if (variant === "success") {
        setType(styles.success);
      }
      if (variant === "error") {
        setType(styles.error);
      }
    }
  }, [variant]);

  return (
    <div className={`${styles.toast} ${type}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={() => {}}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
