export interface PokemonEntity {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export interface ShortPokemonEntity
  extends Pick<PokemonEntity, "name" | "id"> {}

export interface PokemonPage {
  pageCount: number;
  list: ShortPokemonEntity[];
}
