import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'

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
      <header></header>
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <strong id="color" className="red">Blog </strong>
          do Paulo Spiguel
        </h1>
        <p className="titulo-principal">Em breve estarei publicado novidades. Fique ligado ...</p>
        
      </main>
      <footer className="App-footer">
        <h2>P R Spiguel Tecnologia ME</h2>
        <p>{formatDate}</p>
      </footer>
    </div>
  );
}

export default App;
