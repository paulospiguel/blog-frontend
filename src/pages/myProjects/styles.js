import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-weight: bold;
  text-align: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card {
    background-color: #f1f1f1;
    color: #7159c1;
    border-radius: 0 0 30px 30px;
    margin: 10px 10px;
    width: 90vw;
    padding: 10px;
    & ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    & li {
      list-style: none;

      & img {
        width: 68px;
      }
    }
  }
`;
