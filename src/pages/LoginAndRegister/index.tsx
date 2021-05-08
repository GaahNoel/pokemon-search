import React, { useState } from 'react';
import { View, Text } from 'react-native';

import * as S from './styles';

type optionsType = 'Login' | 'Register'

type SelectProps = {
  option: optionsType,
}

const LoginAndRegister = () => {
  const [option, setOption] = useState('Login' as optionsType);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Options>

          <S.ButtonContainer option="Login" isActive={option === 'Login' ? true : false} >
            <S.Button  onPress={() =>  setOption('Login')}>
              <S.ButtonText >Login</S.ButtonText>
            </S.Button>
          </S.ButtonContainer>

          <S.ButtonContainer option="Register" isActive={option === 'Register' ? true : false} >
            <S.Button  onPress={() =>  setOption('Register')}>
              <S.ButtonText >Register</S.ButtonText>
            </S.Button>
          </S.ButtonContainer>

        </S.Options>
  
        <S.OptionContainer>
          <SelectOption option={option}/>
        </S.OptionContainer>

      </S.Container>
    </S.Wrapper>
  );
}

const SelectOption = ({ option }: SelectProps) => {
  if(option === 'Login')
    return <Login/>
  else 
    return <Register/>
}


const Register = () => {
  const handleRegister = () => {

  }

  return (
    <>
      <S.Input placeholderTextColor="white" placeholder="Email"/>
      <S.Input placeholderTextColor="white" secureTextEntry={true} placeholder="Password"/>
      <S.Input placeholderTextColor="white" secureTextEntry={true} placeholder="Confirm Password" />

      <S.ConfirmButton onPress={handleRegister}>
        <S.ConfirmButtonText>
          Register
        </S.ConfirmButtonText>
      </S.ConfirmButton>
    </>
  )
}

const Login = () => {
  const handleLogin = () => {

  }
  
  return (
    <>
      <S.Input placeholderTextColor="white" placeholder="Email"/>
      <S.Input placeholderTextColor="white" secureTextEntry={true} placeholder="Senha"/>

      <S.ConfirmButton onPress={handleLogin}>
        <S.ConfirmButtonText>
          Login
        </S.ConfirmButtonText>
      </S.ConfirmButton>
    </>
  )
}

export default LoginAndRegister;