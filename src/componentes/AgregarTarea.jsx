import React, { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {

    const [inputValue, setInputValue] = useState("");
    const onInputChange = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue)
    }

    const envio = {
        descripcion: inputValue,
        done: false
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        agregarTarea(tarea => [...tarea, envio])
    }
  return (
    <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="agregarTarea"
          id="agregarTarea"
          placeholder="Agregar una tarea"
          value={inputValue}
          onChange={onInputChange}
        />
    </form>
  );
};
