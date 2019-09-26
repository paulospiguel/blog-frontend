import styled from 'styled-components';

export const Container = styled.footer`
  font-family: Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #333;
  display: flex;
  flex-direction: column;
  color: #09d3ac;
  justify-content: center;
  align-items: center;
  padding: 15px;

  .redesSocias {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .redesSocias a {
    color: #09d3ac;
    font-size: 5vh;
    margin: 8px;
  }
  .redesSocias a:hover {
    color: #07af8e;
  }
`;
