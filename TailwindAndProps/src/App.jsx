import { useState } from 'react'
//import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl'>Tailwind TEst</h1>
        <Card name="Tanmay "/> 
        <Card name = "EXAMPLE" />
    </>
  ) 
}

export default App
