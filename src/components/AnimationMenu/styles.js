import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -50px;

  .circle-menu {
    background: #09d3ac;
    border-radius: 50%;
    height: 120px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle {
  width: 250px;
  height: 250px;
  opacity: 0;

  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  transform: scale(0);

  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}

    a {
      position: absolute;
      display: inline-block;
      font-size: 24px;
      color: #fff;
      &:hover {
        color: #bebebe;
      }
    }

    .menuOpen {
      transform: scale(1.7);
      transition: 1s;

      & a:nth-child(1) {
        transform: translateY(-45px);
      }
      & a:nth-child(2) {
        top: 30px;
        transform: translateX(45px);
      }
      & a:nth-child(3) {
        transform: translateX(-35px);
        bottom: 20px;
      }
      & a:nth-child(4) {
        transform: translateY(45px);
      }
      & a:nth-child(5) {
        bottom: 20px;
        transform: translateX(35px);
      }
      & a:nth-child(6) {
        top: 30px;
        transform: translateX(-45px);
      }
    }
  }
  .circle-photo {
    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      transform: scale(1);
      cursor: pointer;
    }
  }
  .open {
    transform: scale(0.7);
    transition: 1s;
    transition-delay: 0.3s;
    transition-timing-function: linear;
  }
`;
