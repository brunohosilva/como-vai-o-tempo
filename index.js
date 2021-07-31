/*
 * File Created: Saturday, 31st July 2021 11:59:20 am
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 12:04:53 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

import { registerRootComponent } from 'expo';

import App from './src/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
