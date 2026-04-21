import React from "react";

export const Tarjeta = ({ nombre, edad, profesion = "Desarrollador" }) => {
  return (
    <>
      <h3> Informacion personal </h3>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Profesion: {profesion}</p>
    </>
  );
};
