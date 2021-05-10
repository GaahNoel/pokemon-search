import { ReactNode } from "react"

export type Pokemon = {
  name: string;
  sprites: { 
    front_default: string;
  };
  height: number;
  weight: number;
  types: [{
      type: {
        name: string;
      }
  }];
  stats: [{
    base_stat : number;
    stat: {
      name: string;
    }
  }]
}

export type Item = {
  name: string;
  sprites: { 
    default: string;
  };
  effect_entries: [{
    effect: string;
    short_effect: string;
  }]
}

export type PokemonTypesType = 'ELECTRIC' | 'POISON' | 'FIRE' | 'GRASS' | 'WATER' | 'DARK' | 'GHOST' | 'PSYCHIC' | 'DRAGON' | 'FAIRY' | 'BUG' | 'STEEL' | 'ROCK' | 'GROUND' | 'FLYING' | 'FIGHTING' | 'ICE' | 'NORMAL'

export type SearchContextProps = {
  children: ReactNode;
}

export type SearchContextData = {
  searchParam: string,
  changeSearchParam: (param: string) => void;
  searchResultPokemon: Pokemon;
  changePokemonSearchResult: (result: Pokemon) => void;
  searchResultItem: Item,
  changeItemSearchResult: (result: Item) => void;
  getDataAndSetPokemonResult: (pokemon: string) => Promise<void>;
}

export type LoginProps = {
  children: ReactNode;
}

export type LoginData = {
  isLogged: boolean;
  changeIsLogged: (param: boolean) => void;
  userEmail: string;
  changeUserEmail: (param: string) => void;
  checkFavorite: (email: string) => Promise<string | void>;
  favorite: string;
  changeFavorite: (param: string) => void;
  
}

export type FavoriteType = [{
  email: string;
  favorite: string;
}]

