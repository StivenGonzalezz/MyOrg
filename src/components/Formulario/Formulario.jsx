import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const {registrarColaborador} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log()
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo = "Nombre" 
                placeholder = "ingrese su nombre" 
                valor={nombre} 
                actualizar={setNombre} 
                required
            />

            <CampoTexto 
                titulo = "Puesto" 
                placeholder = "ingrese su puesto" 
                valor={puesto} 
                actualizar={setPuesto} 
                required
            />

            <CampoTexto 
                titulo = "Foto" 
                placeholder = "ingrese su enlace de foto" 
                valor={foto} 
                actualizar={setFoto} 
                required
            />

            <ListaOpciones 
                valor={equipo} 
                actualizar={setEquipo}
                equipos={props.equipos}
            />

            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario