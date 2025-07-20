import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChipsInput from './Components/ChipsInputs/ChipsInput'
import ToggleButton from './Components/ToggleButton/ToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Namaste React</h1>
     {/* <ChipsInput/> */}
     <ToggleButton/>
    </>
  )
}

export default App
