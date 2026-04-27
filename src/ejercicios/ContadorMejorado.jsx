import { useState } from "react";

export const ContadorMejorado = () => {

    const [sumar, setSumar] = useState(0);
    // const [restar, setRestar] = useState(sumar);

    const handleClickSumar = () => {
    setSumar( (prev) => prev + 1)
    }
    const handleClickRestar = () => {
        if(sumar === 0)
            return;
    setSumar( (prev) => prev - 1)
    }
    const handleClickReset = () => {
    setSumar(0)
    }
    return (
    <>
    <h2>{sumar}</h2>
    <button onClick={handleClickSumar}> + </button> 
    <button onClick={handleClickRestar}> - </button> 
    <button onClick={handleClickReset}> Resetear </button> 
    </>
    )
}