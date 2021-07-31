/*
 * File Created: Saturday, 31st July 2021 12:16:48 pm
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 1:32:25 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate('Today')}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Text>Home</Text>
    </TouchableOpacity>
  );
};

export default Home;
