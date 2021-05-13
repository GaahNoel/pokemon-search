import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import { FirebaseDB, FirebaseAuth } from '../../config/firebase';
import { FavoriteType } from '../../types';


import * as S from './styles';
import { useLogin } from '../../hooks/LoginContext';

const Home = () => {
  const navigation = useNavigation();
  const { changeSearchParam, changePokemonSearchResult, getDataAndSetPokemonResult } = useSearch();
  const { isLogged, userEmail, changeIsLogged, changeUserEmail, favorite, changeFavorite } = useLogin();

  const handleNavigateToSearchPage = (param: string) => {
    changeSearchParam(param);
    navigation.navigate('Search');
  }
  
  const handleLogout = async() => {
    try {
      await FirebaseAuth.signOut();
      changeIsLogged(false);
      changeUserEmail('');
      changeFavorite('');

      navigation.navigate('LoginAndRegister');

    } catch (err) {
      alert('Logout error')
    }
  }
  
  const handleFavorite = async() => {
    if(!isLogged) {
      alert('This feature need login, please sign in first');
      navigation.navigate('LoginAndRegister');
      return;
    }

    if(!favorite) {
      alert("You don't have favorite pokemon");
      return;
    }

    await getDataAndSetPokemonResult(favorite);
    navigation.navigate('PokemonResult');
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>

          <S.FavoriteButton onPress={handleFavorite}>
            <S.StarIcon name={favorite ? "star" : "star-o"} size={50} color="white"/>
          </S.FavoriteButton>

          {isLogged && (
            <S.LogoutButton onPress={handleLogout}>
              <S.PowerIcon name="power" size={50} color="white"/>
            </S.LogoutButton>
          )}

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