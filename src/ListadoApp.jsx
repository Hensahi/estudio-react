import { useState } from "react";
import { AgregarTarea } from "./componentes/AgregarTarea";

const Items = ({ descripcion, visto }) => {
  return (
    <li>
      {descripcion} {visto ? "✅" : "⛔"}{" "}
    </li>
  );
};

export const ListadoApp = () => {
  let listado = [
    { id: 0, descripcion: "Una cosa", visto: false },
    { id: 1, descripcion: "Una cosa", visto: false },
    { id: 2, descripcion: "Una cosa", visto: false },
    { id: 3, descripcion: "Una cosa", visto: true },
    { id: 4, descripcion: "Una cosa", visto: false },
    { id: 5, descripcion: "Una cosa", visto: false },
    { id: 6, descripcion: "Una cosa", visto: false },
    { id: 7, descripcion: "Una cosa", visto: true },
    { id: 8, descripcion: "Una cosa", visto: false },
    { id: 9, descripcion: "Una cosa", visto: false },
    { id: 10, descripcion: "Una cosa", visto: false },
  ];

  const [arreglo, setArreglo] = useState(listado);

  const handleClick = () => {
    console.log(arreglo);
    setArreglo([...arreglo, { descripcion: "Cambiando la cosa", visto: true }]);
  };

  const onAgregarTarea = (tarea) => {
    if (!tarea.trim()) return;
    console.log(tarea);

    const envio = {
      id: arreglo.length,
      descripcion: tarea.trim(),
      done: false,
    };
    setArreglo([...arreglo, envio]);
  };
  return (
    <>
      <h1>Listado de Temas</h1>
      <AgregarTarea agregarTarea={onAgregarTarea} />
      <ol>
        {arreglo.map((item) => (
          <Items
            key={item.id}
            descripcion={item.descripcion}
            visto={item.visto}
          ></Items>
        ))}
      </ol>
      <button onClick={handleClick}>Agregar al listado</button>
    </>
  );
};
