import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image, TextProps } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PokemonTypesType } from '../../types';

const colors = {
    'ELECTRIC': '#f2d94e',
    'POISON': '#b763cf',
    'FIRE': '#fba64c',
    'GRASS': '#60bd58',
    'WATER': '#539ddf',
    'DARK': '#595761',
    'GHOST': '#5f6dbc',
    'PSYCHIC': '#fa8582',
    'DRAGON': '#0c6ac8',
    'FAIRY': '#ef90e6',
    'BUG': '#92bd2d',
    'STEEL': '#5795a3',
    'ROCK': '#c9bc8a',
    'GROUND': '#da7c4d',
    'FLYING': '#a1bbec',
    'FIGHTING': '#d3425f',
    'ICE': '#76d1c1',
    'NORMAL': '#a0a29f'
}


interface TitleProps extends TextProps {
    type: PokemonTypesType;
}

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
    width: 200px;
    height: 200px;
`;
export const Title = styled(Text)`
    font-size: 28px;
    color: white;
    margin-bottom: 15px;
    font-weight: bold;
`;

export const StatsText = styled(Text)`
`;
export const TypeText = styled(Text)<TitleProps>`
    background: ${ props => (colors[props.type])};
    border-radius: 10px;
    color: white;
    padding: 5px;
    max-width: 100px;
    width: 100%;
    text-align: center;
`;
export const Info = styled(View)`
    max-width: 80%;
`;

export const BasicInfoWrapper = styled(View)`
    flex-direction: row;
    justify-content: space-between;
`;

export const StatsMap = styled(View)`
    margin-top: 10px;
    border: 1px solid white;
`;
export const TypesMap = styled(View)`
    justify-content:center; 
    flex-direction: row;
    margin-top: 10px;
`;

export const BasicInfoContainer = styled(View)`
    text-align: center;
`;
export const BasicInfoText = styled(Text)`
    color: white;

`;
export const BasicInfoTitle = styled(Text)`
    color: #E50000;
    font-weight: bold;
`;

export const Line = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

export const Column = styled(Text)`
    color: white;
    margin-left: 20px;
`;