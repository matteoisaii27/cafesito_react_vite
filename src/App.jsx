import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import Login from './components/Login'
import Quotes from './components/Quotes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Bienvenidos </h1> 
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sequi vel rerum nihil.
       Veniam iusto est animi aperiam consequuntur.</p>
       <Login/>
       <Quotes/>
      
      </>
  )

}

export default App
