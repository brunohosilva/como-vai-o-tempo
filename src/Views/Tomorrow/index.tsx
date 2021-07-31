/*
 * File Created: Saturday, 31st July 2021 12:16:48 pm
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 3:39:57 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Tomorrow: React.FC = () => {
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
      <Text>Tomorrow</Text>
    </TouchableOpacity>
  );
};

export default Tomorrow;
