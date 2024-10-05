import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StoresProvider } from "./dal";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoresProvider>
      <App />
    </StoresProvider>
  </StrictMode>
);
