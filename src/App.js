import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import logo from "./assets/imgFundo.png";
import "./App.css";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Effect from './components/Effect';
import Clock from './components/Clock';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faGithub, faFacebook} from '@fortawesome/fontawesome-free-brands';

const formatDate = format(
  new Date(),
  "PPPP",
  {locale: ptBR}
  );

function App() {
 
const mudarCor = () => {
  const obj = document.getElementById("color");
    obj.className === "red" ? obj.classList.replace("red","white") :  obj.classList.replace("white", "red");
 
  }; 

  window.onload = setInterval(mudarCor, 1000);

  return (
    <div className="App">
      <header></header>
      <main className="App-main">
        <div className="logoBlog">
          <h2><b style={{color: "#09d3ac"}}>{"<"}</b>CODEFullStack<b style={{color: "#09d3ac"}}>{"/>"}</b></h2>
          <p style={{color: "#09d3ac", marginLeft: 25}}>Knowledge</p>
        </div>
        <Clock />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Blog em  
          <strong id="color" className="red"> desenvolvimento</strong>
        </h1>
        <p><Effect /></p>
        <div className="redesSocias">
          <Router>
            <a href="https://www.facebook.com/paulospiguel" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.linkedin.com/in/paulo-spiguel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/paulospiguel/?hl=pt"><FontAwesomeIcon icon={faInstagram} /></a>  
            <a href="https://github.com/PauloSpiguel"><FontAwesomeIcon icon={faGithub} /></a>
          </Router>  
        </div> 
      </main>
      <footer className="App-footer">
        <h2>Paulo Roberto Spiguel</h2>
        <p style={{color: "gray"}}>Desenvolverdor FullStack</p>
        <h4>{formatDate}</h4>
      </footer>
    </div>
  );
}

export default App;
