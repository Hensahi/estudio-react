import { useState } from "react";

const Item = ({ titulo, hecho }) => {
  return (
    <>
      <li>
        {titulo} {hecho ? "✅" : "🚫"}
      </li>
    </>
  );
};

let tareas = [
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
];

export const BorrarMap = () => {
  const [tarea, setTarea] = useState(tareas);
  const agregarTarea = () => {
    setTarea([...tarea, { id: 11, texto: "Preba", done: false }]);
  };
  return (
    <>
      <h1>Prueba</h1>
      <ol>
        {tarea.map((item) => (
          <Item key={item.id} titulo={item.texto} hecho={item.done}></Item>
        ))}
      </ol>
      <button onClick={agregarTarea}>Agregar tarea</button>
    </>
  );
};
