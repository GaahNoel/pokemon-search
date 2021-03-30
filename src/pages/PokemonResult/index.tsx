import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import * as S from './styles';
import { Pokemon } from '../../types';
import { PokemonTypesType } from '../../types';


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
              <S.Title>{name.toUpperCase()}</S.Title>
              <S.Info>
                <S.BasicInfoWrapper>

                  <S.BasicInfoContainer>
                    <S.BasicInfoTitle>WEIGHT:</S.BasicInfoTitle>
                    <S.BasicInfoText>{weight}</S.BasicInfoText>
                  </S.BasicInfoContainer>


                  <S.BasicInfoContainer>
                    <S.BasicInfoTitle>HEIGHT:</S.BasicInfoTitle>
                    <S.BasicInfoText>{height}</S.BasicInfoText>
                  </S.BasicInfoContainer>
                </S.BasicInfoWrapper>

                <S.StatsMap>
                  {stats.map((item) => (
                      <S.Line key={item.stat.name}>
                        <S.BasicInfoTitle>
                          {item.stat.name.toUpperCase()} :
                        </S.BasicInfoTitle>
                        <S.Column>
                          {item.base_stat}
                        </S.Column>
                      </S.Line>
                  ))}
                </S.StatsMap>

                <S.TypesMap>
                {types.map((item) => (
                    <S.TypeText type={item.type.name.toUpperCase() as PokemonTypesType} key={item.type.name}>
                      {item.type.name.toUpperCase()}
                    </S.TypeText>
                ))}
                </S.TypesMap>

              </S.Info>
          </S.Container>
        </S.Wrapper>
        <Footer/>
      </>
    );
}

export default PokemonResult;