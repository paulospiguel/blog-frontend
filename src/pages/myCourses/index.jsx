import React from 'react';
import Header from '../../components/Header';
import Courses from '../../components/Courses';
import Footer from '../../components/Footer';

import { Container } from './styles';

export default function myCourses() {
  return (
    <Container>
      <Header />
      <main>
        <Courses />
      </main>
      <Footer />
    </Container>
  );
}
