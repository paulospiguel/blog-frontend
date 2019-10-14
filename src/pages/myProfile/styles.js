import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  main {
    background: #e1e1e1;
    padding: 10px 20px;
    margin: 10px 20px;
    border-radius: 5px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
      Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
      Lucida Grande, Helvetica, Arial, sans-serif;

    .divAbout {
      h1 {
        color: #fff;
        padding: 10px;
      }

      small {
        padding: 10px;
        color: #333;
        font-size: calc(5px + 2vmin);
      }

      p {
        font-size: calc(10px + 1vmin);
        color: #333;
        padding: 10px;
        text-align: justify;
        line-height: 1.5em;
        text-indent: 4em;
      }
    }
  }
`;
