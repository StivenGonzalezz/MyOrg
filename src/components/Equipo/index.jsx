import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';
import "./Equipo.css" 

const Equipo = (props) =>{

    const { titulo, colorPrimario, colorSecundario} = props.datos

    const {colaboradores, eliminarColaborador, actualizaColorEquipo} = props

    const obj ={ 
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo ={
        borderColor: colorPrimario
    }
    return <>{ colaboradores.length >0 &&
          <section className="equipo" style={obj}>
            <input 
                type="color"
                className="inputColor"
                value={hexToRgba(colorPrimario, 0.6)}
                onChange={(e) =>(
                    actualizaColorEquipo(e.target.value, titulo)
                )}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
              {
                  colaboradores.map((colaborador, index) => <Colaborador 
                  datos={colaborador} 
                  key={index} 
                  colorPrimario={colorPrimario} 
                  colorSecundario={colorSecundario}
                  eliminarColaborador={eliminarColaborador}
                  />)
               }
             </div>
         </section>
        }
    </>
}

export default Equipo