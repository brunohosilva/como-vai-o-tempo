/*
 * File Created: Saturday, 31st July 2021 3:53:22 pm
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 4:11:09 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

export interface ThemeType {
  name?: string;

  fontFamily: {
    normal?: string;
    bold?: string;
    100?: string;
    300?: string;
    400?: string;
    500?: string;
    700?: string;
    900?: string;
  };

  fontSize: number;
  colors: string;
}
