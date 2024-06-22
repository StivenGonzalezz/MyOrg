import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import MiOrg from './components/MiOrg/index.jsx'
import Equipo from './components/Equipo/index.jsx';

function App() {

  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX UI",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([])

  const settearFormulario = () =>{
    setMostrarFormulario(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    console.log("new colbad", colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Header />
      {/* { mostrarFormulario ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)}/>  : <></>} se valida lo mismo que arriba pero escrito de una manera diferente  */}

      { 
      mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        />
      }  
      
      <MiOrg settearFormulario={settearFormulario}/>
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={Equipo.titulo}
        colaboradores={colaboradores}
        /> 
      )
      }
    </div>
  );
}

export default App;
