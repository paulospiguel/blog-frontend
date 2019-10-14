import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Draw from '../../components/Draw';
import TitlePage from '../../components/TitlePage';
import CardProfile from './CardProfile';
import Footer from '../../components/Footer';

export default function myProfile() {
  return (
    <Container>
      <Header />
      <TitlePage title="Meu Perfil" />
      <main>
        <CardProfile />
      </main>
      <Footer />
    </Container>
  );
}
