import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import 'moment/locale/pt';

export const Container = styled.div``;

const Timer = () => {
  const [time, setTime] = useState(moment().format('LLL:s'));

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    const timeID = setInterval(() => tick(), 1000);
    return () => clearInterval(timeID);
  });

  const tick = () => setTime(moment().format('LLL:s'));

  return (
    <Container>
      <strong>{time}</strong>
    </Container>
  );
};

export default Timer;
