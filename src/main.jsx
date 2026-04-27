import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Tarjeta } from "./ejercicios/Tarjeta";
// import { Lista } from "./ejercicios/Lista";
import { BorrarMap } from "./ejercicios/BorrarMap";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Tarjeta nombre="hency lara" edad={55} profesion="vago"></Tarjeta>
    <Lista
      tareas={[
        { id: 1, texto: "Aprender React", done: true },
        { id: 2, texto: "Hacer ejercicios", done: false },
        { id: 3, texto: "Leer documentación de Tailwind", done: false },
        { id: 4, texto: "Configurar proyecto en GitHub", done: true },
        { id: 5, texto: "Practicar los pilares de OOP", done: false },
        { id: 6, texto: "Escribir correo para el anteproyecto", done: true },
        { id: 7, texto: "Sincronizar Firebase Studio", done: false },
        { id: 8, texto: "Analizar acordes musicales", done: true },
        { id: 9, texto: "Revisar validaciones con regex", done: false },
        { id: 10, texto: "Preparar presentación académica", done: false },
      ]}
    ></Lista> */}
    <BorrarMap />
  </StrictMode>,
);
