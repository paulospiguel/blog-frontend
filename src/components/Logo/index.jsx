import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  div {
    border: 1px solid #09d3ac;
    padding: 10px 20px;
  }

  strong {
    font-family: Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5em;
  }

  b {
    color: #09d3ac;
  }
  p {
    font-size: calc(5px + 2vmin);
    color: #09d3ac;
    margin-left: 15px;
  }

  .red {
    color: #fff;
    background: red;
    padding: 2px;
    border-radius: 3px;
  }
`;

export default function Logo() {
  return (
    <Container>
      <div>
        <strong>
          <b>{'<'}</b>CODEfy.<b className="red">IT</b>
          <b>{'/>'}</b>
        </strong>
        <p>Knowledge</p>
      </div>
    </Container>
  );
}
