import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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