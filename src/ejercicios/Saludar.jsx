import { useState } from "react"


export const Saludar = ({nombre}) => {
    
    const [saludo, setSaludo] = useState ("Hola Amigo!")
    const handleClickSaludo = () => {
        setSaludo("Hola " + nombre)
    }
    return (
        <>
        <h2>{saludo}</h2>
    <button onClick={handleClickSaludo}>Saluda</button>
    </>
    
    )
}