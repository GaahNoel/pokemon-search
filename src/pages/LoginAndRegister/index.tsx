import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard } from 'react-native';
import { FirebaseAuth } from '../../config/firebase'
import { useLogin } from '../../hooks/LoginContext';
import * as Notifications from 'expo-notifications';


import * as S from './styles';

type optionsType = 'Login' | 'Register'

type SelectProps = {
  option: optionsType,
}

const LoginAndRegister = () => {
  const [option, setOption] = useState('Login' as optionsType);
  const [isKeyboardOpened, setKeyboardOpened] = useState(false);
  const navigation = useNavigation();


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

        {!isKeyboardOpened && (
          <S.Options>
            <S.ButtonContainer option="Login" isActive={option === 'Login' ? true : false} >
              <S.Button  onPress={() =>  setOption('Login')}>
                <S.ButtonText isActive={option === 'Login' ? true : false}>Sign In</S.ButtonText>
              </S.Button>
            </S.ButtonContainer>

            <S.ButtonContainer option="Register" isActive={option === 'Register' ? true : false} >
              <S.Button onPress={() =>  setOption('Register')}>
                <S.ButtonText isActive={option === 'Register' ? true : false}>Sign Up</S.ButtonText>
              </S.Button>
            </S.ButtonContainer>
          </S.Options>
        )}

          <S.OptionContainer isKeyboardOpened={isKeyboardOpened}>
              <SelectOption option={option}/>
              <S.GuestButton onPress={() => navigation.navigate('Home')} >
                <S.GuestText>
                  Sign In as Guest
                </S.GuestText>
              </S.GuestButton>
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
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleRegister = async() => {
    try {
      setPasswordError(false);
      setEmailError(false);

      if(password !== confirmPassword) {
        alert('The passwords do not match');
        setPasswordError(true);
        return;
      }

      const { user } = await FirebaseAuth.createUserWithEmailAndPassword(email, password);
      if(user)
        user.sendEmailVerification();

      setEmail('');
      setPassword('');
      setConfirmPassword('');
          
      alert('User created, please check your email for confirmation');
      
    } catch(error) {
      const lowerCaseError = error.message.toLowerCase();

      const isEmailError = lowerCaseError.includes('email');
      if(isEmailError)
        setEmailError(true);

      const isPasswordError = lowerCaseError.includes('password');
      if(isPasswordError)
        setPasswordError(true);

      alert(error.message);
    }
  }

  return (
    <>
      <S.Input
        placeholderTextColor="black"
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email.trim()) }
        error={emailError}
        autoCapitalize='none'
      />
      
      <S.Input
        placeholderTextColor="black"
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={(password) => setPassword(password) }
        error={passwordError}
        autoCapitalize='none'
      />

      <S.Input
        placeholderTextColor="black" secureTextEntry={true}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword) }
        error={passwordError}
        autoCapitalize='none'
      />

      <S.ConfirmButton onPress={handleRegister}>
        <S.ConfirmButtonText>
          Sign Up
        </S.ConfirmButtonText>
      </S.ConfirmButton>
    </>
  )
}

const Login = () => {

  type Credential = {
    user: {
      email: string,
      emailVerified: boolean,
      sendEmailVerification: () => void,
    },
  }
  

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { changeIsLogged, changeUserEmail, checkFavorite } = useLogin();

  const createHandleNotification = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  }

  const handleLogin = async() => {
    try {
      setPasswordError(false);
      setEmailError(false);

      const { user } = await FirebaseAuth.signInWithEmailAndPassword(email, password) as Credential;
      
      if(!user.emailVerified) {
           
        setEmailError(true);
        user.sendEmailVerification();
        
        alert('Email not verified, new email was sent for verification');
        return;
      }

      setEmail('');
      setPassword('');

      changeIsLogged(true);
      changeUserEmail(user.email);

      await checkFavorite(user.email);

      createHandleNotification();
      const notificationId = await Notifications.scheduleNotificationAsync(
        {
          content: {
            title: 'Que tal escolher um pokemon novo? 😉',
            body:
              `Venha ver as estatísticas do próximo pokemon que quer no seu time e ver se é uma boa escolha!`,
            sound: true,
            priority: Notifications.AndroidNotificationPriority.HIGH,
          },
          trigger: {
            seconds: 30,
          }
        }
      )

      navigation.navigate('Home');
      
    } catch(error) {
      const lowerCaseError = error.message.toLowerCase();

      const isEmailError = lowerCaseError.includes('email');
      if(isEmailError)
        setEmailError(true);

      const isPasswordError = lowerCaseError.includes('password');
      if(isPasswordError)
        setPasswordError(true);

      alert(error.message);
    }
  }
  
  return (
    <>
      <S.Input
        placeholderTextColor="black"
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email.trim()) }
        error={emailError}
        autoCapitalize='none' 
      />

      <S.Input
        placeholderTextColor="black"
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={(password) => setPassword(password) }
        error={passwordError}
        autoCapitalize='none'
      />

      <S.ConfirmButton onPress={handleLogin}>
        <S.ConfirmButtonText>
          Sign In
        </S.ConfirmButtonText>
      </S.ConfirmButton>
    </>
  )
}

export default LoginAndRegister;