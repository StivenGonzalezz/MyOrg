import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) =>{
    const placeholderModificado = `${props.placeholder}. . .`

    const manejarCambio = (e) =>{
        props.actualizar(e.target.value)
    }

    return <div className="campo-texto">
        <label htmlFor="">{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}/>
    </div>
}

export default CampoTexto