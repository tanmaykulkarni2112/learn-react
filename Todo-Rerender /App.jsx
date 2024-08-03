import { useState } from "react"

function App() {
    const [todo, setTodo] = useState([{
        id: 1,
        title: "Go to the gym",
        description: "Go to the gym today"
    }, {
        id: 2,
        title: "Go to the college",
        description: "Go to the college today"    
    }, {
        id: 3,
        title: "Go to the jog",
        description: "Go to the jog today"    
    }]);

    const addTodo = () => {
        setTodo([...todo, {
            id: todo.length + 1,
            title: "Learn java",
            description: "Java deep-dive"
        }]);
    };

    return (
        <div>
            <button onClick={addTodo}>ADD a todo</button>
            {todo.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
        </div>
    );
}

function Todo({ title, description }) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </>
    );
}

export default App;
