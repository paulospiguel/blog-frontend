import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/fontawesome-free-brands';

const Container = styled.div`
  display: flex;
  justify-content: center;

  a {
    margin: 5px;
    font-size: 5vh;
    color: #09d3ac;
  }
`;

export default function Social() {
  return (
    <Container>
      <Router>
        <a
          href="https://www.facebook.com/paulospiguel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.linkedin.com/in/paulo-spiguel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/paulospiguel/?hl=pt">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/PauloSpiguel">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5543996320797">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="my-profile">
          <FontAwesomeIcon icon={faIdCard} />
        </a>
      </Router>
    </Container>
  );
}
