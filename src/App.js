// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForms';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


// let name = "Ishaan"
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
        setAlert({
          mssg: message,
          typ: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode ('dark')
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
      
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route path="/about" element={<About mode = {mode} toggleMode = {toggleMode}/>} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} toggleMode = {toggleMode} />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
