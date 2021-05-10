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
    background: #151515;
`;
export const Container = styled(View)`
    align-items: center;
    justify-content: center;
`;

export const FindImage = styled(Image)`
    width: 100px;
    height: 100px;
`;
export const EffectsMap = styled(View)`
    margin-top: 5px;
    justify-content: center;
    padding: 20px;
    background: #E50000;
    width: 100%;
`;
export const EffectText = styled(Text)`
    color: white;
`;

export const Title = styled(Text)`
    color: white;
    font-size: 28px;
    color: white;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const ShortEffectTitle = styled(Text)`
    color: white;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const EffectsContainer = styled(View)`
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
`;

export const LongEffectTitle = styled(Text)`
    color: white;     
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const Divisor = styled(View)`
    width: 80%;
    margin-bottom: 20px;
`;