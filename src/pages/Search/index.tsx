import React, { useRef, useState } from 'react';
import { useSearch } from '../../hooks/SearchContext';
import Footer from '../../components/Footer';
import { Text,  SafeAreaView  } from 'react-native'
import * as S from './styles';
import axios from 'axios'


type Info = {
  name?: string;
  image?: string;
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
  const { searchParam } = useSearch();
  const [ searchParams, setSearchParam ] = useState('');
  const [ info, setInfo ] = useState<Info>();
  const [ error, setError ] = useState('');

  const handleSearch = async () => {
    const splitedParams = searchParams.toLowerCase().split(' ');
    const rejoinedParams = splitedParams.join('-');

    try {
      const { data: { name, sprites} } = await axios.get(`https://pokeapi.co/api/v2/${searchParam}/${rejoinedParams}`) as ResponseInfo;
      setError('');

      if(searchParam === 'pokemon')
        setInfo({ name , image: String(sprites.front_default) });
      else
        setInfo({ name , image: String(sprites.default) });
      
        console.log(sprites.front_default);
    } catch (err) {
        setError('Não encontrado');
    }
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
          { info && (
            <S.FindInfoContainer>
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