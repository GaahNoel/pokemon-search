import React from 'react';
import { Text, View } from 'react-native';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import * as S from './styles';


const Result = () => {
  const { searchResult } = useSearch();
  const { name, image } = searchResult;
  console.log(searchResult);
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Text>name</Text>
          <S.FindImage source={{
                uri: String(image)
          }}></S.FindImage>
        </S.Container>
      </S.Wrapper>
      <Footer/>
    </>
  );
}

export default Result;