import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {TextoColor} from "./ejercicios/TextoColor"
import "./main.css";
import { Saludar } from "./ejercicios/Saludar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    <TextoColor texto= "Hola mundo" color = "red" />
    <Saludar nombre="Prueba"/>
  </StrictMode>,
);
