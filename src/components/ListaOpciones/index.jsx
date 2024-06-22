import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    

    const manejarCambio = (e) =>{
        console.log(e.target.value)
        props.actualizar()
    }

    return (
        <div className="lista-opciones">
            <label >Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden >Selecionar equipo</option>
                {props.equipos.map((equipo, index)=><option key={index} value={equipo} >{equipo}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones
