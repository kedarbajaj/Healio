import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CopilotProvider } from "@copilotkit/react-core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CopilotProvider>
      <App />
    </CopilotProvider>
  </React.StrictMode>
);
