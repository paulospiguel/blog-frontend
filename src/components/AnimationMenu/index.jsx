import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/fontawesome-free-brands';

import photo from '../../assets/foto.jpg';
import { Container } from './styles';

export default function AnimationMenu() {
  const handleMenu = () => {
    document.querySelector('.circle').classList.toggle('menuOpen');
  };

  return (
    <Container onMouseLeave={handleMenu}>
      <nav className="circle-menu" onMouseEnter={handleMenu}>
        <div className="circle">
          <a href="">
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <div className="circle-photo">
            <img src={photo} alt="" />
          </div>
        </div>
      </nav>
    </Container>
  );
}
