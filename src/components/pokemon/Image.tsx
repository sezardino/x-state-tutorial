import { ComponentPropsWithoutRef, FC } from "react";

export interface PokemonImageProps extends ComponentPropsWithoutRef<"img"> {
  pokemonId: number;
  name: string;
}

export const PokemonImage: FC<PokemonImageProps> = ({ name, pokemonId }) => (
  <img src={`/pokemon/${pokemonId}.jpg`} alt={name} className="pokemon-image" />
);
