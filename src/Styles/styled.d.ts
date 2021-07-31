/*
 * File Created: Saturday, 31st July 2021 3:52:58 pm
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 3:54:04 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

import 'styled-components/native';

import { ThemeType } from './Themes/type';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
