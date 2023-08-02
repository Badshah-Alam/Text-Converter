import { useState } from 'react'
import './App.css';
import Dataform from './Components/DataForm'
import Navbar from './Components/Navbar';
import Contact from './Components/Contect';

function App() {
  const [mode, setMode] = useState('light')

    const modeChanger = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = "black"
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = "white"
        }
    }

    const textMode = () => {
      if (mode=='light') {
        return 'text-dark'
      }
      else {
        return 'text-light'
      }
    }

  return (
    <>

    <Contact />
    
      <Navbar mode={mode} changerFunction={modeChanger} textDesigner={textMode}/>
      <Dataform mode={mode} textDesigner={textMode}/>
    </>
  );
}

export default App;
