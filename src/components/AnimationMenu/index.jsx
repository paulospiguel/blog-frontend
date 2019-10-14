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
  const mouseMenu = () => {
    document.querySelector('.circle-photo').classList.toggle('open');
    document.querySelector('.circle-menu a').classList.toggle('menuOpen');
    console.log();
  };
  const handleMenu = e => {
    e.preventDefault();
    // document.querySelector('.circle').classList.toggle('open');
  };

  return (
    <Container>
      <nav className="circle-menu">
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
        </div>
        <div className="circle-photo" onMouseEnter={mouseMenu}>
          <img src={photo} alt="" />
        </div>
      </nav>
    </Container>
  );
}
