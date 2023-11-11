// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
// import About from "./components/About";
import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#454549'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
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
      < Navbar title = "TextUtils" aboutText = "about Us" mode = {mode} toggleFunc = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
          <Textbox heading="Enter text here to analyse" mode = {mode} showAlert = {showAlert}/>
          {/* <About /> */}
      </div>
    </>
  );
}

export default App;
