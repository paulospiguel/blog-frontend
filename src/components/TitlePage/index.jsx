import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Ubuntu, sans-serif;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 50vw;
  }
`;

export default function TitlePage(props) {
  return (
    <Container>
      <h1>{props.title}</h1>
      <div>
        <hr />
      </div>
    </Container>
  );
}
