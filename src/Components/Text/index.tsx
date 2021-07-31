/*
 * File Created: Saturday, 31st July 2021 3:57:42 pm
 * Author: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Last Modified: Saturday, 31st July 2021 4:11:25 pm
 * Modified By: Bruno Oliveira (bruno.oliveira@zappts.com)
 * -----
 * Copyright 2021 - Cartões ADD, Porto Seguro
 */

// import React from 'react';
// import { View } from 'react-native';

// import TextProps from './type';

// // import { Container } from './styles';

// const Text: React.FC<TextProps> = () => {
//   return <View />;
// };

// export default Text;

import styled from 'styled-components/native';

import Style from '~/Styles/Themes/defaultTheme';

import TextProps from './type';

export const Text = styled.Text<TextProps>`
  color: ${(props) => (props.color ? props.color : Style.colors.White)};
  font-size: ${(props) => (props.size ? props.size : Style.fontSize.lg)}px;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : Style.fontFamily.normal};
  font-variant: lining-nums;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  text-decoration-color: ${(props) =>
    props.textDecorationColor ? props.textDecorationColor : 'transparent'};
`;

export default Text;
