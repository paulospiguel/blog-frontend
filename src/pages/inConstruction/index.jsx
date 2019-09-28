import React from 'react';

// import AnalogClock, { Themes } from 'react-analog-clock';
import Effect from '../../components/Effect';
import Clock from '../../components/Clock';

import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import Social from '../../components/Social';
import image from '../../assets/imgFundo.png';
import { Container } from './styles';

export default function inConstruction() {
  return (
    <Container>
      <header>
        <Logo />
      </header>
      <main>
        <div className="divClock">
          <Clock
            style={{
              position: 'absolute',
              margin: '20px 0 0 0',
            }}
          />
          {/** <AnalogClock width={150} theme={Themes.aqua} /> */}
          <img src={image} alt="" />
        </div>
        <Effect />
        <Social />
      </main>
      <Footer />
    </Container>
  );
}
