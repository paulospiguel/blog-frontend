import React from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
 
const mudarCor = () => {
  const obj = document.getElementById("color");
    obj.className === "red" ? obj.classList.replace("red","white") :  obj.classList.replace("white", "red");
 
  }; 

  const typeWriter = () =>{
    const elemento = document.querySelector(".titulo-principal");
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    
    textoArray.forEach(function(letra, i){   
      
      setTimeout(function(){
          elemento.innerHTML += letra;
        }, 75 * i)
      });
    
  }

  setTimeout(typeWriter, 1000);
  setInterval(mudarCor, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <strong id="color" className="red">Blog </strong>
          do Paulo Spiguel
        </h1>
        <p className="titulo-principal">Em breve estarei publicado novidades. Fique ligado ...</p>
      </header>
    </div>
  );
}

export default App;
