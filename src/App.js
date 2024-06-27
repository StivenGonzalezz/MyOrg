import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import MiOrg from './components/MiOrg/index.jsx'
import Equipo from './components/Equipo/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {

  

  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [equipos, setEquipos] = useState([
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
  ])
  const [colaboradores, setColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/StivenGonzalezz.png",
    nombre: "Stiven Gonzalez",
    puesto: "Desarrolador Web"
  },
  {equipo: "UX UI",
    foto: "https://github.com/Adalinee.png",
    nombre: "Adaline",
    puesto: "Designer"
  }
  ])

  const settearFormulario = () =>{
    setMostrarFormulario(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    console.log("new colbad", colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = () =>{
    console.log("eliminar")
  }

  const actualizaColorEquipo = (color, titulo) =>{
    console.log("Actualizar: ", color, titulo)
    const equiopsActualizados = equipos.map((equipo) =>{
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color
      }
      return equipo
    })

    setEquipos(equiopsActualizados)
    
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
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizaColorEquipo={actualizaColorEquipo}
        /> 
      )
      }

      <Footer />
    </div>
  );
}

export default App;
