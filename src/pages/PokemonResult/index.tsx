import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import * as S from './styles';

const PokemonResult = () => {
  const { searchResultPokemon, searchParam } = useSearch();
  const {
    name,
    sprites,
    stats,
    height,
    weight,
    types
  } = searchResultPokemon
    return (
      <>
        <S.Wrapper>
          <S.Container>
              <S.FindImage source={{
                uri: String(sprites.front_default)
              }}></S.FindImage>
              <Text>{name}</Text>
              <Text>{height}</Text>
              <Text>{weight}</Text>
              <Text>{stats[0].stat.name}</Text>
          </S.Container>
        </S.Wrapper>
        <Footer/>
      </>
    );
}

export default PokemonResult;