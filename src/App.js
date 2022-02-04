// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import About from "./components/About";
import TextForm from "./components/textForm";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnCol, setBtnCol] = useState("dark");

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const LightMode = () => {
    setMode("light");
    setBtnCol("dark");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    showAlert("Light mode has been enable", "success");
  };
  const BlueMode = () => {
    setMode("dark");
    setBtnCol("primary");
    document.body.style.backgroundColor = "#0c0c31";
    document.body.style.color = "white";
    showAlert("Blue mode has been enable", "success");
  };
  const GreenMode = () => {
    setMode("dark");
    setBtnCol("success");
    document.body.style.backgroundColor = "#0a2b14";
    document.body.style.color = "white";
    showAlert("Green mode has been enable", "success");
  };
  const RedMode = () => {
    setMode("dark");
    setBtnCol("danger");
    document.body.style.backgroundColor = "#2b0a0a";
    document.body.style.color = "white";
    showAlert("Red mode has been enable", "success");
  };
  const YellowMode = () => {
    setMode("dark");
    setBtnCol("warning");
    document.body.style.backgroundColor = "#272b0a";
    document.body.style.color = "white";
    showAlert("Yellow mode has been enable", "success");
  };

  return (
    <>

    {/* <Router> */}
    <Navbar
    mode={mode}
    LightMode={LightMode}
    BlueMode={BlueMode}
    GreenMode={GreenMode}
    RedMode={RedMode}
    YellowMode={YellowMode}/>
      {/* <Routes> */}
        
        {/* <Route path="/" element={}/> */}
        <TextForm mode={mode} btnCol={btnCol} showAlert={showAlert}></TextForm>
                                
        {/* <Route path="/about" element={<About/>}/> */}

      {/* </Routes>
    </Router> */}
      
      <Alert alert={alert}></Alert>
      
    </>
  );
}

export default App;
