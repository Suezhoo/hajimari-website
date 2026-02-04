import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import DefaultLayout from "./components/layout/DefaultLayout.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DefaultLayout>
        <App />
      </DefaultLayout>
    </BrowserRouter>
  </StrictMode>,
);
