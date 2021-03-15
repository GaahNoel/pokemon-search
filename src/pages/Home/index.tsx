import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';


import * as S from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { changeSearchParam } = useSearch();

  const handleNavigateToSearchPage = (param: string) => {
    changeSearchParam(param);
    navigation.navigate('Search');
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Button onPress={() => handleNavigateToSearchPage('pokemon')}>
            <CommunityIcon name="pokeball" size={100} color="white" />
            <S.ButtonText>Pokemon</S.ButtonText>
          </S.Button>

          <S.Button onPress={() => handleNavigateToSearchPage('item')}>
            <CommunityIcon name="bag-personal" size={100} color="white" />
            <S.ButtonText>Item</S.ButtonText>
          </S.Button>
        </S.Container>

      </S.Wrapper>
      <Footer homePage={true}/>
    </>
  );
}

export default Home;