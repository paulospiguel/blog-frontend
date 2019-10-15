import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

export const Container = styled.nav`
  position: absolute;
  background: #fff;
  opacity: 0.75;
  color: #333;
  z-index: 1;
  transition: 1s;
  &.open {
    width: 200px;
    height: 100%;

    -webkit-transition: all 1s ease-out;
    -moz-transition: all 1s ease-out;
    transition: all 1s ease-out;
  }
`;

export default function Drawer() {
  const { open } = useSelector(state => state.projects);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: 'TOOGLE_DRAWER', open: false });
    if (!open) document.querySelector('.menu').classList.toggle('open');
  };

  useEffect(() => handleClose, [open]);

  return <Container className="menu" onMouseLeave={handleClose} />;
}
