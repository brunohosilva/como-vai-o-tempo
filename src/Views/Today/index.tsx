/*
 * File Created: Saturday, 31st July 2021 12:17:47 pm
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 4:16:09 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Text } from '~/Components';
import Theme from '~/Styles/Themes/defaultTheme';

const Today: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate('Tomorrow')}
      style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      <Text size={Theme.fontSize.xl} color={Theme.colors.Woodsmokeapprox}>
        Today
      </Text>
    </TouchableOpacity>
  );
};

export default Today;
