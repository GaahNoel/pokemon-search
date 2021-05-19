import React, { useRef, useState } from 'react';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import { Text,  SafeAreaView, Keyboard } from 'react-native';
import * as S from './styles';
import axios from 'axios'
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator } from 'react-native';
import HomeButton from '../../components/HomeButton';


type Info = {
  name: string;
  image: string;
}
type ResponseInfo = {
  data:{
    name: string;
    sprites: Sprite;
  }
}
type Sprite = {
  front_default?: string,
  default?: string
}


const Search = () => {
  const { searchParam, changePokemonSearchResult, changeItemSearchResult } = useSearch();
  const [ searching, setSearching ] = useState(false);
  
  const [ searchParams, setSearchParam ] = useState('');
  const [ info, setInfo ] = useState({} as Info);
  const [ fullData, setFullData ] = useState({} as any);

  const [ findResult, setFindResult ] = useState(false);
  const [ error, setError ] = useState('');
  const navigator = useNavigation();

  const handleSearch = async () => {
    const splitedParams = searchParams.toLowerCase().trim().split(' ');
    const rejoinedParams = splitedParams.join('-');
    setFindResult(false);
    setSearching(true);

    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/${searchParam}/${rejoinedParams}`) as any;
      const { name , sprites } = data;
      
      setError('');

      if(searchParam === 'pokemon')
        setInfo({ name , image: String(sprites.front_default) });
      else
        setInfo({ name , image: String(sprites.default) });

        setFullData(data);
        setFindResult(true);
        setSearching(false);
    } catch (err) {
        setError('Não encontrado !');
        setSearching(false);
    }
  }

  const handleResult = () => {

    if(searchParam === 'pokemon') {
      const {
        name,
        sprites,
        stats,
        height,
        weight,
        types
      } = fullData;
      
      changePokemonSearchResult({
        name,
        sprites,
        stats,
        height,
        weight,
        types
      });
      navigator.navigate('PokemonResult');
    }
    else {
      const {
        name,
        sprites,
        effect_entries,
      } = fullData;

      changeItemSearchResult({
        name,
        sprites,
        effect_entries,
      });
      navigator.navigate('ItemResult');
    }
  } 

  return (
    <>
      <HomeButton/>
      <S.Wrapper>
        <S.Container>
          <S.Title>Search for <S.Subtitle>{searchParam}</S.Subtitle></S.Title>
          <S.SearchContainer>
            <S.Input value={searchParams} onChangeText={(text) => setSearchParam(text)} onSubmitEditing={Keyboard.dismiss} />
            <S.SearchButton onPress={handleSearch}>
              <S.ButtonText>GO</S.ButtonText>
            </S.SearchButton>
          </S.SearchContainer>


        {searching
        ? (
          <S.LoaderContainer>
            <ActivityIndicator size="large" color="#E20000"/>
          </S.LoaderContainer>
        )
        : (
          <S.ResponseContainer>
          { findResult ? (
            <S.FindInfoContainer onPress={handleResult}>
              <S.FindImage source={{
                uri: String(info?.image)
              }}>
              </S.FindImage>
              <S.FindText>
                { info?.name }
              </S.FindText>
            </S.FindInfoContainer>
          ) : null }
          {error ? (
            <S.ErrorContainer>
              <S.ErrorText>
                {error}
              </S.ErrorText>
            </S.ErrorContainer>
          ) : null }
          </S.ResponseContainer>
        )}
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default Search;