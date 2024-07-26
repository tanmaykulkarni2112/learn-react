import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h1> Another element since we used <br></br> 'fragment'</h1>
  </>
  );
}

export default App
