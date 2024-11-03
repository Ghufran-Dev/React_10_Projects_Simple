import StartGame from './Pages/StartGame'
import { useState } from 'react'
import './App.css'
import PlayGame from './Pages/PlayGame'

const App = () => {
  let [isStarted, setStarted] = useState(false)
  const toggleBtn = () =>{
    setStarted((pre)=>!pre)
  }
  return (
<>
  {isStarted?<PlayGame/>:<StartGame toggle={toggleBtn}/>}
</>  
  )
}

export default App