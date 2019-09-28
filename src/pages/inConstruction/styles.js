import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10vh 80vh 10vh;
  justify-content: space-between;
  grid-template-areas:
    'header header'
    'main main'
    'footer footer';

  header {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 50vmin;
    min-height: 300px;
  }

  main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .divClock {
      display: flex;
      margin-top: 40px;
    }

    h3 {
      color: red;
      font-family: Ubuntu, sans-serif;
    }
  }
`;
