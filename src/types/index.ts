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