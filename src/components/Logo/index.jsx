import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 15px;
  border: 1px solid #09d3ac;

  h1 {
    font-family: Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(12px + 2vmin);
  }

  b {
    color: #09d3ac;
  }
  .slogan {
    font-size: calc(5px + 2vmin);
    color: #09d3ac;
    margin-left: 25px;
  }
`;

export default function Logo() {
  return (
    <Container>
      <h1>
        <b>{'<'}</b>CODEFullStack<b>{'/>'}</b>
      </h1>
      <p className="slogan">Knowledge</p>
    </Container>
  );
}
