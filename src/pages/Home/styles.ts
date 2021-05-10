import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import FA from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export const Wrapper = styled(View)`
    justify-content:center;
    align-items: center;
    flex-direction:column;
    flex: 1;
    background: #3E3E3E;
    position: relative;
    height: 100%;
`;
export const Container = styled(View)`
    align-items: center;
    justify-content: center;
    height: 100%;
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
    align-items:center;
    flex-direction: row;
    margin: 20px 0;
    width: 100%;
`; 

export const ButtonText = styled(Text)`
    color: white;
    margin-left: 10px;
    font-size: 28px;
    width: 150px;
    text-transform: uppercase;
    font-weight: bold;
`
export const StarIcon = styled(FA)`
    
`;
export const PowerIcon = styled(Feather)`
    
`;

export const FavoriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 10%;
    right: 0;
`;
export const LogoutButton = styled(TouchableOpacity)`
    position: absolute;
    top: 10%;
    left: 0;
`;