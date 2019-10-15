import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
`;

export const CardDegree = styled.div`
  cursor: pointer;
  width: 600px;
  height: 300px;
  background: #bebebe;
  margin: 5px;
  transition: 0.7s;
  transition-delay: 0.2s;

  &:hover {
    background: #fff;
    width: 650px;
    height: 350px;
    transition: 0.7s;
  }
`;
