/*
 * File Created: Saturday, 31st July 2021 12:20:08 pm
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 1:39:23 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

import React from 'react';

import {
  createStackNavigator,
  // TransitionPresets,
} from '@react-navigation/stack';

import * as Views from '~/Views';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator>
      <App.Screen name="Home" component={Views.Home} />
      <App.Screen name="Today" component={Views.Today} />
    </App.Navigator>
  );
};

export default AppRoutes;
