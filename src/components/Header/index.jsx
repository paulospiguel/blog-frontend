import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import photo from '../../assets/foto.jpeg';

const Container = styled.header`
  header {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    z-index: 999;

    .divTop {
      background: #09d3ac;
      height: 100px;
      width: 100%;

      display: flex;
      justify-content: flex-end;
    }
  }
  .photoProfile {
    display: flex;
    justify-content: center;
    img {
      margin-left: 10px;
      margin-top: -70px;
      background: #fff;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border-bottom: 2px solid #09d3ac;
    }
  }

  .headerCard {
    background-color: #09d3ac;
    height: 150px;
    margin-top: -70px;
    padding: 10px;
    width: 100%;
    border-radius: 0 0 30px 30px;
    z-index: 1;

    .cardBorder {
      background-color: #282c34;
      width: 100%;
      height: 100%;
      border-color: #09d3ac;
      border-style: solid;
      border-radius: 0 0 30px 30px;
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <header>
        <div className="divTop">
          <nav>
            <Logo />
          </nav>
        </div>
        <div className="photoProfile">
          <img src={photo} alt="" />
        </div>
      </header>
      <div className="headerCard">
        <div className="cardBorder" />
      </div>
    </Container>
  );
}
