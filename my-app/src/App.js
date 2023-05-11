//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Textform from './components/Textform';

import  { useState} from 'react'

import Alert from './components/Alert';

import About from './components/About';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  //Link

} from "react-router-dom";


//import About from './components/About';
// var name="tushar";
function App() {

  const [mode, setMode]=useState('light');

  const [alert, setAlert]=useState(null);


  const showAlert=(message,type)=>{

    setAlert(
      {
    
      msg: message,
      type: type

      }

    )
    setTimeout(()=>{
      setAlert(null)
    },1800);


  }

  const removeBodyClasses=()=>
  {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    



  }

  const toggleMode=(cls)=>{
    removeBodyClasses();

    //document.body.classList.add('bg-'+cls)



    if(mode=== 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#002d5e';
      showAlert("success, change to dark mode","success");

      document.title='Textutils- dark mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("success, changre to light mode","success");
      document.title='Textutils- light mode';
    }

  }

 

  return (

    <>
   
    <Router>
    <Navbar title="TextUtils" items="About" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert} />
    <div className='"container my-3'>
      <Routes>

        <Route exact path="/about" element={<About/>} />
        
        
        <Route  path ="/" element={ <Textform headi="enter Text here" mode={mode} showAlert={showAlert} />} />
       


     
     
     
    
       </Routes>
      

      </div>
      </Router>


    </>
   
  );
}

export default App;



