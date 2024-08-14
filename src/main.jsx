import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./Styles/input.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";

import "@mantine/core/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
