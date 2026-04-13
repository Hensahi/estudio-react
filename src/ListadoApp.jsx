const Items = ({descripcion, visto}) => {
  return(<li>{descripcion} {visto ? "✅" : "⛔"} </li>)
}

export const ListadoApp = () => {
  return (
    <>
    <h1>Listado de Temas</h1>
      <Items descripcion = "Una cosa" visto = {false }/>
      <Items descripcion = "Una cosa" visto = {false }/>
      <Items descripcion = "Una cosa" visto = {false }/>
      <Items descripcion = "Una cosa" visto = {true }/>
      <Items descripcion = "Una cosa" visto = {false }/>
      <Items descripcion = "Una cosa" visto = {false }/>
      <Items descripcion = "Una cosa" visto = {false }/>
      <Items descripcion = "Una cosa" visto = {true }/>
      <Items descripcion = "Una cosa" visto = {false }/>
      <Items descripcion = "Una cosa" visto = {false }/>
      <Items descripcion = "Una cosa" visto = {false }/>
    </>
  )
}