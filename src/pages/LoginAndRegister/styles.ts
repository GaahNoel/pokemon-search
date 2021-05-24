import styled from 'styled-components/native';
import { View, TouchableOpacity, Text, ViewProps, KeyboardAvoidingView, TextProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ButtonContainerProps extends ViewProps {
    isActive: boolean;
    option: 'Login' | 'Register';
}
interface ButttonTextProps extends TextProps {
    isActive: boolean;
}
interface ContentProps extends ViewProps {
    isKeyboardOpened: boolean;
}

interface InputProps {
    error ?: boolean;
}

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
    flex-direction: column;
    width: 100%;
    height: 90%;
`; 

export const Content = styled(View)<ContentProps>`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: ${props => props.isKeyboardOpened ? '80%' : '60%'};
`; 

export const ButtonContainer = styled(View)<ButtonContainerProps>`
    background:  ${props => props.isActive ? '#e50000' : 'white'};
    width: 50%;
`;

export const Button = styled(TouchableOpacity)`
    padding: 20px 5px;
`;

export const GuestButton = styled(TouchableOpacity)`
    margin-top: 20px;
`;

export const GuestText = styled(Text)`
    color: white;
    text-decoration: underline;
    font-size: 18px;
`;

export const ButtonText = styled(Text)<ButttonTextProps>`
    color: ${props => props.isActive ? 'white' : 'black'};
    text-align: center;
    font-weight: bold;
`;

export const Options = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    
`;

export const OptionContainer = styled(KeyboardAvoidingView)<ContentProps>`
    border: 2px solid #e50000;
    background:  #151515;
    border-top-width: ${props => props.isKeyboardOpened ? '1px' : 0};
    width: 90%;
    margin: 0 auto;
    justify-content:center;
    align-items: center;
    flex: 1;
`;

export const Input = styled(TextInput)<InputProps>`
    padding: 5px 10px;
    width: 80%;
    margin: 10px;
    border: 2px solid ${props => props.error ? '#e50000;': 'white'};
    background: white;
`;

export const InputText = styled(Text)`
    color: black;
`;

export const ConfirmButton =  styled(TouchableOpacity)`
    background: #e50000;
    padding: 10px 10px;
    width: 80%;
    margin-top: 20px;
`
export const ConfirmButtonText =  styled(Text)`
    text-align: center;
    color: white;
    font-weight: bold;
`

export const Title = styled(Text)`
  color: white;
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const PokeballIcon = styled(CommunityIcon)`
  margin: 15px 0;
`;

