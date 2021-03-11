import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Wrapper = styled(View)`
    justify-content:center;
    align-items: center;
    flex-direction:column;
    flex: 1;
    background: #3E3E3E;
`;
export const Container = styled(View)`
    align-items: center;
    justify-content: center;
`;

export const PrincipalText = styled(Text)`
    background-color: black;
    border-radius: 10px;
    color: white;
    padding: 20px;
`;

export const Button = styled(TouchableOpacity)`
    background: #3E3E3E;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid white;
    justify-content:center;
    align-items:center;
    flex-direction: row;
    margin: 20px;
`; 

export const ButtonText = styled(Text)`
    color: white;
    margin-left: 10px;
    font-size: 30px;
    width: 120px;
`
