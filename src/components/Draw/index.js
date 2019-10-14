import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: #fff;
  opacity: 0.75;
  width: 200px;
  height: 100%;
  z-index: 999;
`;

function Draw() {
  return <Container />;
}

export default Draw;
