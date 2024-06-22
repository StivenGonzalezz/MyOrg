import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Formulario from './components/Formulario/Formulario.jsx';
import MiOrg from './components/MiOrg/index.jsx'

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true)

  const settearFormulario = () =>{
    setMostrarFormulario(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario ? <Formulario />  : <></>}
      {/* { mostrarFormulario && <Formulario />}  se valida lo mismo que arriba pero escrito de una manera diferente  */}
      
      <MiOrg settearFormulario={settearFormulario}/>
    </div>
  );
}

export default App;
