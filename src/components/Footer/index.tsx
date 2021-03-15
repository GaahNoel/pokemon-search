import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { BackHandler, Linking } from 'react-native';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as S from './styles';

interface FooterProps {
  homePage?: boolean;
}

const Footer = ({ homePage }: FooterProps) => {
  const navigator = useNavigation();
  const [openMenu, setOpenMenu] = useState(false);

  function goBack() {
    if(openMenu)
      setOpenMenu(false);
    else
    {
      if(homePage)
        BackHandler.exitApp();
      else
        navigator.goBack();
    }
  }

  function handleOpenMenu() {
    if(openMenu)
      setOpenMenu(false);
    else
      setOpenMenu(true);
  }

  function goToLink() {
    Linking.openURL('https://github.com/GaahNoel/');
  }

  return(
    <S.Container>
      <S.Menu open={openMenu}>
        <S.PokeballIcon name="pokeball" size={100} color="white" />
        <S.Title>Pokedex</S.Title>
        <S.Name>Gabriel A. Noel</S.Name>
        <S.Link onPress={goToLink}>
          https://github.com/GaahNoel/
        </S.Link>
      </S.Menu>
      <S.Footer>
        <S.CommunityMenuIcon name="keyboard-return" size={50} onPress={goBack}/>
        <S.EntypoMenuIcon name="menu" size={50} onPress={handleOpenMenu}/>
      </S.Footer>  
    </S.Container>
  );
}

export default Footer;