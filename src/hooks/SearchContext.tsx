import React, { useContext } from 'react';
import { createContext, useState, ReactNode } from 'react';
import { Pokemon, Item, SearchContextProps, SearchContextData } from '../types/index';
import axios from 'axios';


export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchContextProps) {
  const [searchParam, setSearchParam] = useState('');
  const [searchResultPokemon, setSearchResultPokemon] = useState({} as Pokemon);
  const [searchResultItem, setSearchResultItem] = useState({} as Item);

  function changeSearchParam(param: string) {
    setSearchParam(param);
  }

  function changePokemonSearchResult(result: Pokemon) {
    setSearchResultPokemon(result);
  }
  
  function changeItemSearchResult(result: Item) {
    setSearchResultItem(result);
  }

  async function getDataAndSetPokemonResult(pokemon: string) {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) as any;
      setSearchResultPokemon(data);  

    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <SearchContext.Provider value={ {
      searchParam,
      changeSearchParam,
      searchResultPokemon,
      changePokemonSearchResult,
      searchResultItem,
      changeItemSearchResult,
      getDataAndSetPokemonResult
    }}>
      
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);
  return context;
}
