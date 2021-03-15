import React, { useRef, useState } from 'react';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import { Text,  SafeAreaView  } from 'react-native'
import * as S from './styles';
import axios from 'axios'

const Search: React.FC = () => {
  const { searchParam } = useSearch();
  const [searchParams, setSearchParam] = useState('');
  const [ pokemon, setPokemon] = useState('');

  const handleSearch = async () => {
    const splitedParams = searchParams.toLowerCase().split(' ');
    const rejoinedParams = splitedParams.join('-');

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/${searchParam}/${rejoinedParams}`);
      setPokemon(response.data.name);
    } catch (err) {
      setPokemon('Error');
    }
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Input value={searchParams} onChangeText={(text) => setSearchParam(text)} />
          <S.SearchButton onPress={handleSearch}>
            <S.ButtonText>GO</S.ButtonText>
          </S.SearchButton>
          <Text>
            { pokemon }
          </Text>
        </S.Container>
      </S.Wrapper>
      <Footer/>
    </>
  );
}

export default Search;