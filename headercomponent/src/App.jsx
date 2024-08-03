import { useState } from "react"

function App(){

    //global state to udapte the title
    const [firsttitle ,setFirstTitle] = useState("rahul is my name");

    function updateTitle() {
        setFirstTitle("My name is " + Math.random());
    }

    return(
        <>
            <button onClick = {updateTitle}> Update the Title </button>
            <Header title = {firsttitle}></Header>
            <Header title = "title is title"></Header>
        </>
    )
}

function Header({title}) {
        return ( 
        <div> 
            {title}
        </div>
    )
}
export default App
