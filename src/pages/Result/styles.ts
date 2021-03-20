import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
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

export const FindImage = styled(Image)`
    width: 50px;
    height: 50px;
`;