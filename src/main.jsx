import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Contador } from "./Contador";
import { ComponentePractica } from "./ComponentePractica";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contador num={0} />
    <ComponentePractica num={0} />
  </StrictMode>,
);
