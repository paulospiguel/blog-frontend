import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
  justify-content: flex-start;

  > * {
    padding: 12px;
    flex: 1 100%;
  }

  img {
    height: 40vmin;
  }
  .App-link {
    color: #09d3ac;
  }
  .message {
    margin-top: 20px;
    font-size: calc(10px + 2vmin);
    font-family: 'Courier New', Courier, monospace;
  }
  .red {
    color: red;
  }

  .white {
    color: white;
  }

  .titulo-principal {
    max-width: 580px;
    text-align: center;
    margin: 60px auto;
    font-family: 'Courier New', Courier, monospace;
    color: #fff;
  }
  .titulo-principal:after {
    content: '|';
    margin-left: 5px;
    opacity: 1;
    animation: pisca 0.7s infinite;
  }
  /* Animação aplicada ao content referente a classe *.titulo-principal* resultando num efeito de cursor piscando. */

  @keyframes pisca {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;
