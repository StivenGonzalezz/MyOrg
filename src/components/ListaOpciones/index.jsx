import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "PUX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]

    const manejarCambio = (e) =>{
        console.log(e.target.value)
        props.actualizar()
    }

    return (
        <div className="lista-opciones">
            <label >Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden >Selecionar equipo</option>
                {equipos.map((equipo, index)=><option key={index} value={equipo} >{equipo}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones
