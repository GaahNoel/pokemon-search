import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Firebase } from '../../config/firebase'

import * as S from './styles';

type optionsType = 'Login' | 'Register'

type SelectProps = {
  option: optionsType,
}

const LoginAndRegister = () => {
  const [option, setOption] = useState('Login' as optionsType);
  const [isKeyboardOpened, setKeyboardOpened] = useState(false)


  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  },[])

  const keyboardDidShow = () => {
    setKeyboardOpened(true);
  };

  const keyboardDidHide = () => {
    setKeyboardOpened(false);
  };


  return (
    <S.Wrapper>
      <S.Container>

      {!isKeyboardOpened ? (
        <>
          <S.PokeballIcon name="pokeball" size={100} color="white" />
          <S.Title>Pokemon Search</S.Title>
        </>
      ): null}

      <S.Content isKeyboardOpened={isKeyboardOpened}>
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
     
      </S.Content>
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = async() => {
    const FirebaseAuth = Firebase.auth();
    try {
      if(password !== confirmPassword)
        return;

      const { user } = await FirebaseAuth.createUserWithEmailAndPassword(email, password);
      alert('Usuário criado com sucesso');
      
    } catch(error) {
      alert(error.message);
    }
  }

  return (
    <>
      <S.Input
         placeholderTextColor="white"
        placeholder="Email"
        onChangeText={(email) => setEmail(email) }
      />
      
      <S.Input
        placeholderTextColor="white"
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(password) => setPassword(password) }
      />

      <S.Input
        placeholderTextColor="white" secureTextEntry={true}
        placeholder="Confirm Password"
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword) }
      />

      <S.ConfirmButton onPress={handleRegister}>
        <S.ConfirmButtonText>
          Register
        </S.ConfirmButtonText>
      </S.ConfirmButton>
    </>
  )
}

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    const FirebaseAuth = Firebase.auth();
    try {
      const userCredential = await FirebaseAuth.signInWithEmailAndPassword(email, password);
      
      setEmail('');
      setPassword('');
      
      alert('Usuário logado com sucesso');
      
      navigation.navigate('Home');
      
    } catch(error) {
      alert(error.message);
    }
  }
  
  return (
    <>
      <S.Input
        placeholderTextColor="white"
        placeholder="Email"
        onChangeText={(email) => setEmail(email) }
      />

      <S.Input
        placeholderTextColor="white"
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={(password) => setPassword(password) }
      />

      <S.ConfirmButton onPress={handleLogin}>
        <S.ConfirmButtonText>
          Login
        </S.ConfirmButtonText>
      </S.ConfirmButton>
    </>
  )
}

export default LoginAndRegister;