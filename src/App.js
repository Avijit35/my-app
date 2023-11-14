// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import About from "./components/About";
import React, {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

function App() {

  // document.title = 'TextUtils - Home'

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#454549'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }

    // setInterval(()=>{
    //   document.title = 'TextUtils - Amazing Site'
    // },2000)

    // setInterval(()=>{
    //   document.title = 'TextUtils - Amazing Utilies'
    // },1500)
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  return (
    <>
    <BrowserRouter>
      < Navbar title = "TextUtils" aboutText = "about Us" mode = {mode} toggleFunc = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textbox heading="Enter text here to analyse" mode = {mode} showAlert = {showAlert}/>} />
          <Route path="/about" element={<About />} />
        </Routes>    
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
