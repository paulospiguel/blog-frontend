import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -50px;
  border-radius: 50%;

  .circle-menu {
    background: #09d3ac;
    border-radius: 50%;
    height: 120px;
    width: 120px;
    margin: 0 auto;
    display: flex;

    .circle {
      width: 120px;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      transform: scale(1);

      -webkit-transition: all 0.4s ease-out;
      -moz-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;

      a {
        position: absolute;
        display: inline-block;
        color: #fff;
        opacity: 0;

        &:hover {
          cursor: pointer;
          color: #bebebe;
          font-size: 44px;
          z-index: 1;
        }
      }
    }
  }

  .circle-photo {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      transform: scale(1);
      transition: 1s;
    }
  }

  .menuOpen {
    img {
      transform: scale(0.5);
      transition: 1s;
    }

    & a:nth-child(1) {
      transform: translateY(-42px);
      font-size: 24px;
      opacity: 1;
      transition: 1s;
    }
    & a:nth-child(2) {
      top: 30px;
      transform: translateX(42px);
      font-size: 24px;
      opacity: 1;
      transition: 1s;
    }
    & a:nth-child(3) {
      transform: translateX(-35px);
      font-size: 24px;
      bottom: 20px;
      opacity: 1;
      transition: 1s;
    }
    & a:nth-child(4) {
      transform: translateY(42px);
      font-size: 24px;
      opacity: 1;
      transition: 1s;
    }
    & a:nth-child(5) {
      bottom: 20px;
      transform: translateX(35px);
      font-size: 24px;
      opacity: 1;
      transition: 1s;
    }
    & a:nth-child(6) {
      top: 30px;
      transform: translateX(-42px);
      font-size: 24px;
      opacity: 1;
      transition: 1s;
    }
  }
`;

/*





.open {
  transform: scale(0.7);
  transition: 1s;
  transition-delay: 0.3s;
  transition-timing-function: linear;
}


*/
