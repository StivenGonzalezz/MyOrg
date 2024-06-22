import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) =>{

    const [mostrar, setMostrar] = useState(true)

    const manejarClick = () =>{
        console.log("Mostrar / Ocultar elemento")
        setMostrar(!mostrar)
    }
    
    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.settearFormulario}/>
    </section>
}

export default MiOrg