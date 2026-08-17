import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastProvider from "../ToastProvider/ToastProvider";

function App() {
  return (
    <>
      <ToastProvider role="region" aria-live="polite" aria-label="Notification">
        <ToastPlayground />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
