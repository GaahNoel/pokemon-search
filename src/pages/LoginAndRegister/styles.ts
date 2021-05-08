import styled from 'styled-components/native';
import { View, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface ButtonContainerProps extends TouchableOpacityProps {
    isActive: boolean;
    option: 'Login' | 'Register';
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
    height: 50%;
`; 

export const ButtonContainer = styled(View)<ButtonContainerProps>`
    ${props => {
            if(props.option === 'Login') {
                if(props.isActive)
                    return `
                        border-left-color: #e50000;
                        border-left-width: 1px;
                        border-right-color: #e50000;
                        border-right-width: 1px;
                    `;
                else 
                    return 'border-left-color: white; border-left-width: 1px;';
            }
            else {
                if(props.isActive)
                    return `
                        border-right-color: #e50000;
                        border-right-width: 1px;
                        border-left-color: #e50000;
                        border-left-width: 1px;
                    `;
                else 
                    return 'border-right-color: white; border-right-width: 1px;';
            }
        }
    }

    border-top-width: 1px;
    border-top-color: ${props => props.isActive ? '#e50000' : 'white'};
    ${props => !props.isActive ? 'border-bottom-width: 1px; border-bottom-color: #e50000' : ''};
   
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

export const OptionContainer = styled(View)`
    border: 1px solid #e50000;
    border-top-color: #3E3E3E;
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