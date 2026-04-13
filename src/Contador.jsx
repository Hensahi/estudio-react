// const FuncionExterna = () => {
//   return <button>Soy un Boton</button>;
// };

// const handleAnotherClick = (event, segundoArgumento) => {
//   console.log(event);
//   console.log(segundoArgumento);
// };

export const Contador = ({ num }) => {
  const handleClick = () => {
    num += 1;
    console.log(num);
  };
  return (
    <>
      <h1>Contador</h1>
      <h3>{num}</h3>
      <button onClick={handleClick}>Haz click!</button>
      {/* <FuncionExterna></FuncionExterna> //Llamada a la funcion externa */}
      {/* <button
        onClick={function () {
          console.log("Soy un bonton en React!");
        }}
      >
        Soy un boton
      </button> */}
      {/* <button onClick={handleClick}>Soy un boton</button>
      <button onClick={(event) => handleAnotherClick(event, "Hola Mundo")}>
        Soy el segundo boton
      </button> */}
      {/* Esta es la forma de invocar una funcion esterna cuando solo vamos a recibir un argumento  */}
    </>
  );
};
