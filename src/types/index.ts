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
  }]
}

export type PokemonTypesType = 'ELECTRIC' | 'POISON' | 'FIRE' | 'GRASS' | 'WATER' | 'DARK' | 'GHOST' | 'PSYCHIC' | 'DRAGON' | 'FAIRY' | 'BUG' | 'STEEL' | 'ROCK' | 'GROUND' | 'FLYING' | 'FIGHTING' | 'ICE' | 'NORMAL'
