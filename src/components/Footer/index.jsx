import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Container } from './styles';

const formatDate = format(new Date(), 'PPPP', { locale: ptBR });

const Footer = () => {
  return (
    <Container>
      <h2>Paulo Roberto Spiguel</h2>
      <p style={{ color: 'gray' }}>Desenvolverdor FullStack</p>
      <h4>{formatDate}</h4>
    </Container>
  );
};

export default Footer;
