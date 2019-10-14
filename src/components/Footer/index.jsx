import React from 'react';

import TimerNow from '../Timer';

import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <h2>Paulo Roberto Spiguel</h2>
      <p style={{ color: 'gray' }}>Desenvolverdor FullStack</p>
      <h4>
        <TimerNow />
      </h4>
    </Container>
  );
};

export default Footer;
