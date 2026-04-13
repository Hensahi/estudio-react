import PropTypes from "prop-types";

// componente con snippet ffc
// function HolaMundo() {
//   return <h1>Hola Mundo desde react</h1>;
// }

// export default HolaMundo;

//componente con snippet rafc

//Declaracion de variables:

export const PrimerComponente = ({ titulo, subtitulo }) => {
  console.log(titulo, subtitulo);
  return (
    <>
      <h1>Seccion de props</h1>
      <h3>{titulo}</h3>
      <h3>{subtitulo * 8}</h3>
    </>
  );
};

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string, //Es opcional ya que no lleva isRequired
};
