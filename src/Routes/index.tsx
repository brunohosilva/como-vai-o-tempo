/*
 * File Created: Saturday, 31st July 2021 12:20:18 pm
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 3:22:24 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';

import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

import { SplashAnimation } from '~/Assets/Animation';

import AppRoutes from './app.routes';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #3490dc;
`;

const Routes: React.FC = () => {
  const [splashTime, setSplashTime] = useState(true);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  setTimeout(() => {
    setSplashTime(false);
  }, 4000);

  if (splashTime) {
    return (
      <Container>
        <LottieView source={SplashAnimation} autoPlay />
      </Container>
    );
  }

  return <AppRoutes />;
};

export default Routes;
