import {BrowserRouter, Routes , Route, useNavigate} from 'react-router-dom';
import './App.css'
import { Landing } from '../pages/Landing';
import { Dashboard } from '../pages/Dashboard';

function App() {

  // const navigate = useNavigate();

  return (

    <>
    {/* <div style={{background : "black", color: "white"}}>
      <div>
      Hi there this a static
      <button onClick={ ()=> {
        window.location.href ="/"}  
      }>Landing</button> <------------this portion will work

        
        
        {/* WILL NOT WORK SINCE THE PLACEMENT OF THE HOOK IS INCORRECT. *It should be used in BrowerRouter and must be inside function which is called in BrowerRouter!!* 
        <button onClick={()=> {
          navigate("/");
        }}> Landing page</button> */}

      {/* <button onClick={() =>{
        window.location.href ="/Dashboard"}}>Dashboard</button>  
      </div>
    </div> */}
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path = "/" element = {<Landing/>} />
      <Route path = "/dashboard" element = {<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
<div>
    <button onClick ={ () => {
    navigate("/");
  }}>
      Landing Page
    </button>
    <button onClick={() => {
      navigate("/Dashboard");
    }}>Dashboard</button>  
  </div>
  )
  
}

export default App
