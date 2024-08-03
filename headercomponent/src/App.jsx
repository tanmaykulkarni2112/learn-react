//Create a react app that has a  Header component that takes a title as a prop and renders it inside a div The top level App component renders 2 Headers


//App componenet
function App(){
    return(
        <div>
            <Header title = "tanmay"></Header>
            <Header title = "Arnav"></Header>
        </div>
    )
}

// Header component
// Object destructuring 
function Header({title}) { // OR function Header(props)
    return ( // Return --> {props.title} 
        <div> 
            {title}
        </div>
    )
}
export default App
