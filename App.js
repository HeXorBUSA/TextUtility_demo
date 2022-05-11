import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import React, { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const removeBodyClass =() =>{

    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
  }

  const toggleMode = (color)=>{
    // console.log(color)
    // removeBodyClass();
    // document.body.classList.add('bg-'+color)
    // document.body.classList.add('gadhvi')
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="HeXorBUSA TextUtility" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={ <About mode={mode} />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> }/>
      </Routes>
    </>
  );
}

export default App;