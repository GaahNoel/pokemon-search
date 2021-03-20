import React, { useRef, useState } from 'react';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import { Text,  SafeAreaView  } from 'react-native';
import * as S from './styles';
import axios from 'axios'
import { useNavigation } from '@react-navigation/core';


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


const Search: React.FC = () => {
  const { searchParam, changeSearchResult } = useSearch();
  
  const [ searchParams, setSearchParam ] = useState('');
  const [ info, setInfo ] = useState({} as Info);
  const [ fullData, setFullData ] = useState({} as any);

  const [ findResult, setFindResult ] = useState(false);
  const [ error, setError ] = useState('');
  const navigator = useNavigation();

  const handleSearch = async () => {
    const splitedParams = searchParams.toLowerCase().split(' ');
    const rejoinedParams = splitedParams.join('-');
    setFindResult(false);

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
    } catch (err) {
        setError('Não encontrado !');
    }
  }

  const handleResult = () => {
    console.log(searchParam);

    if(searchParam === 'pokemon') {
      const {
        name,
        sprites,
        stats,
        height,
        weight,
        types
      } = fullData;
      
      changeSearchResult({
        name,
        sprites,
        stats,
        height,
        weight,
        types
      });
    }
    else {
      const {
        name,
        sprites,
        effect_entries: effectEntries,
      } = fullData;

      changeSearchResult({
        name,
        sprites,
        effectEntries,
      });
    }

    navigator.navigate('Result');
  } 

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.SearchContainer>
            <S.Input value={searchParams} onChangeText={(text) => setSearchParam(text)} />
            <S.SearchButton onPress={handleSearch}>
              <S.ButtonText>GO</S.ButtonText>
            </S.SearchButton>
          </S.SearchContainer>


          <S.ResponseContainer>
          { findResult && (
            <S.FindInfoContainer onPress={handleResult}>
              <S.FindImage source={{
                uri: String(info?.image)
              }}>
              </S.FindImage>
              <S.FindText>
                { info?.name }
              </S.FindText>
            </S.FindInfoContainer>
          )}
          {error && (
            <S.ErrorContainer>
              <S.ErrorText>
                {error}
              </S.ErrorText>
            </S.ErrorContainer>
          )}
          </S.ResponseContainer>
        </S.Container>
      </S.Wrapper>
      <Footer/>
    </>
  );
}

export default Search;