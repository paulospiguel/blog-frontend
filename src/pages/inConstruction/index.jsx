import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import Effect from '../../components/Effect';
import Clock from '../../components/Clock';

import logo from '../../assets/imgFundo.png';

import { Container } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Social from '../../components/Social';

const showScreen = false;
const message = (
  <h1 className="message">
    Blog em{' '}
    <strong id="color" className="red">
      {' '}
      desenvolvimento
    </strong>
  </h1>
);
const buttonAcess = (
  <Router>
    <Link
      to="/"
      style={{
        margin: '20px',
        background: '#09d3ac',
        color: '#fff',
        textDecoration: 'none',
        padding: '5px 50px',
      }}
    >
      ENTRAR
    </Link>
  </Router>
);

export default function inConstruction() {
  // window.onload = setInterval(mudarCor, 1000);
  const mudarCor = () => {
    const obj = document.getElementById('color');
    obj.className === 'red'
      ? obj.classList.replace('red', 'white')
      : obj.classList.replace('white', 'red');
  };

  return (
    <>
      <Container>
        <Header />
        <div>
          <center>
            <Clock />
          </center>
          <img src={logo} alt="logo" />
          {showScreen ? buttonAcess : message}
          <Effect />
          <Social />
        </div>
        <Footer />
      </Container>
    </>
  );
}
