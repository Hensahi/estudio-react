import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {UsersApp} from "./UsersApp"
import "./main.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
  <UsersApp />
  </StrictMode>,
);
