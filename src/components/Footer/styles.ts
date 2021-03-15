import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, ViewProps, Linking } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
interface MenuProps extends ViewProps {
  open?: boolean;
}

export const Container = styled(View)`
  position: relative;
`; 
export const Footer = styled(View)`
  flex-direction: row;
  justify-content:space-between;
  background: #E50000;
`; 
export const EntypoMenuIcon = styled(EntypoIcon)`
  color: white;
  margin-right: 10px;
`

export const CommunityMenuIcon = styled(CommunityIcon)`
  color: white;
  margin-left: 10px;
`
export const Menu = styled(View)<MenuProps>`
  opacity: ${(props) => (props.open ? 100 : 0) };
  max-height: 400px;
  width: 100%;
  background:#E50000;
  position: absolute;
  z-index: 10;
  bottom: 100%;
  align-items:center;
`; 
export const Title = styled(Text)`
  color: white;
  font-size: 30px;
  margin-bottom: 10px;
`;
export const Name = styled(Text)`
  color: white;
  font-size: 26px;
  margin-bottom: 50px;

`;
export const Link = styled(Text)`
  color: white;
  font-size: 20px;
  margin-bottom: 25px;
`;

export const PokeballIcon = styled(CommunityIcon)`
  margin: 15px 0;
`;