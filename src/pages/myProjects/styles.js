import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    margin: 10px 30px;

    .card {
      background-color: #f1f1f1;
      color: #7159c1;
      border-radius: 0 0 30px 30px;
      margin: 10px 10px;
      width: 600px;
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
  }
  .footer {
    justify-content: flex-end;
  }
`;
