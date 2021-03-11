import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

const Footer = () => {
  const navigator = useNavigation();

  function goBack() {
    navigator.goBack();
  }

  return(
    <S.Footer>
      <S.CommunityMenuIcon name="keyboard-return" size={50} onPress={goBack}/>
      <S.EntypoMenuIcon name="menu" size={50} />
    </S.Footer>
  );
}

export default Footer;