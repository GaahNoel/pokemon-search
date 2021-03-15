import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export const Wrapper = styled(View)`
    justify-content:center;
    align-items: center;
    flex-direction:column;
    flex: 1;
    background: #3E3E3E;
`; 
export const Container = styled(View)`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`; 
export const PrincipalText = styled(Text)`
    background-color: blue;
    border-radius: 10px;
    color: white;
    padding: 20px;
`; 
export const Input = styled(TextInput)`
    background: white;
    width: 200px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 50px;
    padding-left: 10px;
`;
export const SearchButton = styled(TouchableOpacity)`
    background: #E50000;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
`;
export const ButtonText = styled(Text)`
    color: white;
    font-weight: bold;
`;