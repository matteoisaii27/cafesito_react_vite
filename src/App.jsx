import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Bienvenidos </h1> 
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sequi vel rerum nihil
      numquam accusantium ipsam veritatis est earum. Ratione delectus vitae odio expedita.
       Veniam iusto est animi aperiam consequuntur.</p>
       <Boton/>
      </>
  )

}

export default App
