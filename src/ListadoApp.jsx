import { useState } from "react"

const Items = ({descripcion, visto}) => {
  return(<li>{descripcion} {visto ? "✅" : "⛔"} </li>)
}

export const ListadoApp = () => {

  let listado = [
              {descripcion: "Una cosa", visto: false },
              {descripcion: "Una cosa", visto: false },
              {descripcion: "Una cosa", visto: false },
              {descripcion: "Una cosa", visto: true },
              {descripcion: "Una cosa", visto: false },
              {descripcion: "Una cosa", visto: false },
              {descripcion: "Una cosa", visto: false },
              {descripcion: "Una cosa", visto: true },
              {descripcion: "Una cosa", visto: false },
              {descripcion: "Una cosa", visto: false },
              {descripcion: "Una cosa", visto: false },
  ]

  const [arreglo, setArreglo] = useState(listado);

  const handleClick = () => {
    console.log(arreglo);
    setArreglo([...arreglo, {descripcion: "Cambiando la cosa", visto: true}]);
  }

  return (
    <>
    <h1>Listado de Temas</h1>
      <ol>
        {arreglo.map(item => <Items key={item.visto} descripcion={item.descripcion} visto={item.visto} ></Items>)}
      </ol>
      <button onClick={handleClick}>Agregar al listado</button>
    </>
  )
}