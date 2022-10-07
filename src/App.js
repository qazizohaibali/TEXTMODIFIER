
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Help from './Components/Help'

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  
  const [mode, setMode] = useState('light') 
  const changecolor=()=>{
   if(mode === 'light')
   {
     setMode('dark')
     document.body.style.backgroundColor='#505255'
     
   }
   else
   {
     setMode('light')
     document.body.style.backgroundColor='white'
   }
  } 

  return (
    // basename='/TEXTMODIFIER'
    <Router >
    <Navbar title="TeXtMoDifieR" home="Home Page" mode={mode} toggleMode={changecolor} about="About" help="Help" />
    <Routes>
            
             <Route path="/" element={<TextForm  heading="ONLINE TEXTMODIFIER"  mode={mode} />}></Route>
           
             <Route path="/help" element={<Help   mode={mode} />}></Route>
           
          
    </Routes>
           
    </Router>

           
           

  );
}

export default App;
