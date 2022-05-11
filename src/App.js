import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import React, { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Alert from './Alert.js'

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


  const toggleMode = ()=>{
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
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={ <About mode={mode} />}/>
          <Route exact path="*" element={<TextForm showAlert={showAlert} heading="Try TextUtils - For A Education Purpose By HEXOBUSA" mode={mode}/> }/>
      </Routes>
    </>
  );
}

export default App;