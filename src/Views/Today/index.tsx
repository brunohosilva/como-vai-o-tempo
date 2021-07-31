/*
 * File Created: Saturday, 31st July 2021 12:17:47 pm
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 1:32:34 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Today: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate('Home')}
      style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      <Text>Today</Text>
    </TouchableOpacity>
  );
};

export default Today;
