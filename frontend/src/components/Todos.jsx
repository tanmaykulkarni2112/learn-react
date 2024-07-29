//conventional way --> export function Todos(props){
// const todos = Todos.props;
// }

// export function Todos({todos}){ //here todos will be array
//     return(
//         <div>
//             <h1>Go to gym</h1>
//             <h2>You need to go to the gym</h2>
//             <button>MARK AS COMPLETED</button>
//         </div>
//     )
// }

export function  Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                    <h1>{todos.title}</h1>
                    <h2>{todos.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                </div>
        })}
    </div>
}