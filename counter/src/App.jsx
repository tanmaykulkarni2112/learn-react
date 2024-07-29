import { useState } from 'react';
import './App.css'

function App() {

  // The state is the value that is going to change1! 
  // 0th index value and function to update that value
  let [counter, setCounter] = useState(0) //created a state
  
  
  const addValue = () => {
    setCounter(++counter );
    // counter++;
    // console.log(counter);
  }

  const removeValue = () =>{
    setCounter(--counter );
    // counter--;
    // console.log(counter);
  }

  return (
    <>
      <h1>Counter using the State </h1>
      <h2>Counter value :  {counter}</h2>
      <button onClick={addValue}> Add value</button>
      <br/>
      <button onClick={removeValue}> Remove value</button>
    </>
  )
}

export default App
