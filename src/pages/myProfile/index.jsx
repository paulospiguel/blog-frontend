import React from 'react';

import { Container } from './styles';

import photo from '../../assets/foto.jpeg';

export default function myProfile() {
  return (
    <Container>
      <div style={{ background: '#09d3ac', height: 100, width: '100%' }} />
      <div>
        <img
          src={photo}
          alt=""
          style={{
            marginLeft: '10px',
            marginTop: '-70px',
            background: '#fff',
            height: '15vh',
            width: '15vh',
            borderRadius: '50%',
          }}
        />
      </div>
      <div
        style={{
          background: '#fff',
          height: '30vh',
          width: '90%',
          borderTopLeftRadius: '40px',
          borderBottomRightRadius: '40px',
          margin: 20,
        }}
      />
    </Container>
  );
}
