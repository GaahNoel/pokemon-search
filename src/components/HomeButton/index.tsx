import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { BackHandler, Linking } from 'react-native';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';

import * as S from './styles';

const HomeButton = () => {
  const navigator = useNavigation();

  function goToLink() {
    Linking.openURL('https://github.com/GaahNoel/');
  }

  return(
    <S.Container>
      <S.Content>
        <S.EntypoMenuIcon name="home" size={50} onPress={() => navigator.navigate('Home')}/>
      </S.Content>  
    </S.Container>
  );
}

export default HomeButton;