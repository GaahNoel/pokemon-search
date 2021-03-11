import React, { useContext } from 'react';
import { createContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  children: ReactNode;
}

interface SearchContextData {
  searchParam: string,
  changeSearchParam: (param: string) => void;
}

export const SearchContext = createContext({} as SearchContextData);


export function SearchProvider({ children }: SearchContextProps) {
  const [searchParam, setSearchParam] = useState('');

  function changeSearchParam(param: string) {
    setSearchParam(param);
  }

  return (
    <SearchContext.Provider value={ { searchParam, changeSearchParam } }>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);
  return context;
}
