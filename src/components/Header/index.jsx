import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import DehazeIcon from '@material-ui/icons/Dehaze';
import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import AnimationMenu from '../AnimationMenu';
import Logo from '../Logo';
import photo from '../../assets/foto.jpg';

const useStyles = makeStyles({
  iconDrawer: {
    color: '#fff',
  },
});

const Container = styled.header`
  header {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    z-index: 999;

    .divTop {
      background: #09d3ac;
      height: 100px;
      width: 100%;

      display: flex;
      justify-content: space-between;
    }
  }
  .photoProfile {
    display: flex;
    justify-content: center;
  }

  .headerCard {
    background-color: #09d3ac;
    height: 150px;
    margin-top: -70px;
    padding: 10px;
    width: 100%;
    border-radius: 0 0 30px 30px;
    z-index: 1;

    .cardBorder {
      background-color: #282c34;
      width: 100%;
      height: 100%;
      border-color: #09d3ac;
      border-style: solid;
      border-radius: 0 0 30px 30px;
    }
  }
`;

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch({ type: 'TOOGLE_DRAWER', open: true });
  };

  return (
    <Container>
      <header>
        <div className="divTop">
          <div>
            <Button onClick={handleOpen}>
              <DehazeIcon className={classes.iconDrawer} />
            </Button>
          </div>
          <nav>
            <Logo />
          </nav>
        </div>
        {/* <div className="photoProfile">
          <img src={photo} alt="" />
          </div> */}
        <div className="photoProfile">
          <AnimationMenu />
        </div>
      </header>
      <div className="headerCard">
        <div className="cardBorder" />
      </div>
    </Container>
  );
}
