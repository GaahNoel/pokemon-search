import styled from 'styled-components/native';
import { View, TouchableOpacity, Text, ViewProps, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ButtonContainerProps extends ViewProps {
    isActive: boolean;
    option: 'Login' | 'Register';
}
interface ContentProps extends ViewProps {
    isKeyboardOpened: boolean;
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
    ${props => {
            if(props.option === 'Login') {
                if(props.isActive)
                    return `
                        border-left-color: #e50000;
                        border-left-width: 2px;
                        border-right-color: #e50000;
                        border-right-width: 2px;
                    `;
                else 
                    return 'border-left-color: white; border-left-width: 2px;';
            }
            else {
                if(props.isActive)
                    return `
                        border-right-color: #e50000;
                        border-right-width: 2px;
                        border-left-color: #e50000;
                        border-left-width: 2px;
                    `;
                else 
                    return 'border-right-color: white; border-right-width: 2px;';
            }
        }
    };

    border-top-width: 2px;
    border-top-color: ${props => props.isActive ? '#e50000' : 'white'};
    ${props => !props.isActive ? 'border-bottom-width: 2px; border-bottom-color: #e50000' : ''};
    
    width: 50%;
`;

export const Button = styled(TouchableOpacity)`
    padding: 20px 5px;

`;
export const ButtonText = styled(Text)`
    color: white;
    width: 150px;
    text-align: center;
`;

export const Options = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    
`;

export const OptionContainer = styled(KeyboardAvoidingView)`
    border: 2px solid #e50000;
    border-top-width: 0;
    width: 90%;
    margin: 0 auto;
    justify-content:center;
    align-items: center;
    flex: 1;
`;

export const Input = styled(TextInput)`
    border: 1px solid white;
    padding: 10px;
    width: 80%;
    margin: 10px;
    color: white;
`;

export const InputText = styled(Text)`
    color: white;
`;

export const ConfirmButton =  styled(TouchableOpacity)`
    background: #e50000;
    padding: 20px 10px;
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