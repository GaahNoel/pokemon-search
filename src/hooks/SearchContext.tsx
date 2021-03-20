import React, { useContext } from 'react';
import { createContext, useState, ReactNode } from 'react';

type SearchContextProps = {
  children: ReactNode;
}

type SearchContextData = {
  searchParam: string,
  changeSearchParam: (param: string) => void;
  searchResult: any;
  changeSearchResult: (result: any) => void;
}

type Result = {
  name: string,
  image: string,
}

export const SearchContext = createContext({} as SearchContextData);


export function SearchProvider({ children }: SearchContextProps) {
  const [searchParam, setSearchParam] = useState('');
  const [searchResult, setSearchResult] = useState({} as any);

  function changeSearchParam(param: string) {
    setSearchParam(param);
  }

  function changeSearchResult(result: Result) {
    setSearchResult(result);
  }

  return (
    <SearchContext.Provider value={ { searchParam, changeSearchParam, searchResult, changeSearchResult } }>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);
  return context;
}
