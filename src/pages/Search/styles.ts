import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image } from 'react-native'
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
    flex-direction: column;
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
export const FindInfoContainer = styled(TouchableOpacity)`
    background-color: white;
    padding: 10px 10px;
    border-radius: 10px;
    width: 250px;
    flex-direction: row;
    align-items: center;
    margin: 10px;
`;

export const FindImageContainer = styled(View)`
    width: 100%;
    max-width: 100px;
    border-radius: 5px;
`;
export const FindImage = styled(Image)`
    width: 50px;
    height: 50px;
`;
export const FindText = styled(Text)`
    font-size: 15px;
    text-transform: uppercase;
`;

export const ErrorContainer = styled(View)`
    max-width: 100%;
    background-color: red;
    padding: 20px 10px;
    border-radius: 10px;
    max-width: 600px;
    width: 250px;
    margin: 10px;
`;

export const ErrorText = styled(Text)`
    color: white;
    text-align: center;
    font-weight: bold;
`;

export const ResponseContainer = styled(View)`
    flex-direction:row;
`;

export const SearchContainer = styled(View)`
    flex-direction:row;
`;

export const LoaderContainer = styled(View)`
    margin-top: 25px;
`;