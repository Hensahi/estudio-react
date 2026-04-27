import { useState } from "react"


export const TextoColor = ({texto, color}) =>{
    
    const [mostrar, setMostrar] = useState (false);
    // const handleClick = () => {
    //     setText(texto)
        
    // }
    
    return(
        <>
            <h2 style={{ color: color }}>{mostrar ? texto : "Texto de prueba"}</h2>
            <button onClick={() => setMostrar(true)}>Haz click aqui</button>
        </>

    )
}