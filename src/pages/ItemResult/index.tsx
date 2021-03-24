import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import * as S from './styles';

const ItemResult = () => {
  const { searchResultItem, searchParam } = useSearch();
  const { name, sprites,  effect_entries} = searchResultItem;
  const [ loaded, setLoaded ] = useState(false);

   return(
    <>
      <S.Wrapper>
        <S.Container>
          {loaded ? (
            <>
              <S.FindImage source={{
                uri: String(sprites.default)
              }}></S.FindImage>
              
              <Text>{name}</Text>
              <Text>{effect_entries}</Text>
            </>
          ): null}
        </S.Container>
      </S.Wrapper>
      <Footer/>
    </>
   )
}

export default ItemResult;