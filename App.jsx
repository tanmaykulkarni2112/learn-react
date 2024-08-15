import { useState } from "react";


function App()
{
  let [count, setCount] = useState (0);
  return(
    <> 
    <button onClick={() => {
      setCount(count += 1);
      console.log(count);
    }}>Click me </button>
    
    </>
  )
}


export default App; 