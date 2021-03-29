import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import * as S from './styles';

const ItemResult = () => {
  const { searchResultItem } = useSearch();
  const { name, sprites,  effect_entries} = searchResultItem;

   return(
    <>
      <S.Wrapper>
        <S.Container>
          <S.FindImage source={{
            uri: String(sprites.default)
          }}></S.FindImage>
          
          <S.Title>{name.toUpperCase()}</S.Title>

          <S.EffectsContainer>

            <S.Divisor>
              <S.ShortEffectTitle>Short Description</S.ShortEffectTitle>
              <S.EffectsMap>
                {effect_entries.map(effect => (
                  <S.EffectText key={effect.short_effect}>{effect.short_effect.toUpperCase()}</S.EffectText>
                ))}
              </S.EffectsMap>
            </S.Divisor>

            <S.Divisor>    
              <S.LongEffectTitle>Long Description</S.LongEffectTitle>
              <S.EffectsMap>
                {effect_entries.map(effect => (
                  <S.EffectText key={effect.effect}>{effect.effect.toUpperCase()}</S.EffectText>
                ))}
              </S.EffectsMap>
            </S.Divisor>

          </S.EffectsContainer>

        </S.Container>
      </S.Wrapper>
      <Footer/>
    </>
   )
}

export default ItemResult;