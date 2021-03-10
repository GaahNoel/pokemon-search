import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as S from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToSearchPage = () => {
    navigation.navigate('Search');
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Button onPress={handleNavigateToSearchPage}>
            <CommunityIcon name="pokeball" size={100} color="white" />
            <S.ButtonText>Search</S.ButtonText>
          </S.Button>

          <S.Button onPress={handleNavigateToSearchPage}>
            <CommunityIcon name="bag-personal" size={100} color="white" />
            <S.ButtonText>Search</S.ButtonText>
          </S.Button>
        </S.Container>


      </S.Wrapper>
      <S.FinalMenu>
        <S.CommunityMenuIcon name="keyboard-return" size={50}/>
        <S.EntypoMenuIcon name="menu" size={50}/>
      </S.FinalMenu>
    </>
  );
}

export default Home;