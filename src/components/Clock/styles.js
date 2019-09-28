import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .clock-container {
    position: relative;
    width: 20%;
    overflow: hidden;
    background: #fff;
    margin-left: auto;
    margin-right: auto;
    display: block;

    &.styling {
      box-shadow: 0px 0px 10px #888888;
      border-radius: 50%;
      min-width: 100px;
      margin-top: 1%;
    }

    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  .clock-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .background-numbers {
      position: absolute;
      width: 90%;
      height: 90%;
      top: 5%;
      left: 5%;
      z-index: 1;
      .numbers {
        fill: grey;
      }
    }

    .indicator {
      border-radius: 10px;
      transform-origin: bottom;
      outline: 1px solid transparent; // Firefox fix on rotation
      position: absolute;
      bottom: 50%;

      &.seconds-indicator {
        width: 0.5%;
        height: 37.5%;
        z-index: 2;
        background-color: #dfc48c;
        &.transition-effect {
        }
      }

      &.minutes-indicator {
        width: 1%;
        height: 30%;
        z-index: 3;
        background-color: #cd6a51;
        &.transition-effect {
        }
      }

      &.hours-indicator {
        width: 1.5%;
        height: 22.5%;
        z-index: 4;
        background-color: #8f9c6c;
        &.transition-effect {
        }
      }
    }

    .indicator-cover {
      position: absolute;
      bottom: 48.5%; /*(50% - (3% /2)) */
      border-radius: 50%;
      width: 3%;
      height: 3%;
      background-color: lightgrey;
      z-index: 5;
    }
  }

  .digital {
    margin-top: 50px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
`;
