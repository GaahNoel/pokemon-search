import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';

import * as S from './styles';


const Search: React.FC = () => {
  const { searchParam } = useSearch();

  return (
    <>
      <S.Container>
        <TextInput></TextInput>
        <Text>{searchParam} 🚀</Text>
      </S.Container>
      <Footer/>
    </>
  );
}

export default Search;