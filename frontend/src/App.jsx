//import { useState } from 'react'

import {Todos} from'./components/Todos'
import { CreateTodo } from './components/CreateTodo'
import { useState } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);

  // fetch("https:localhost:3000/todos")
  // .then(async function(res){
  //   const json = await res.json();
  //   setTodos()
  // })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App

