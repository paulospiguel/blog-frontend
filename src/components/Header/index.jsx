import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

const Container = styled.header`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

export default function Header() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
