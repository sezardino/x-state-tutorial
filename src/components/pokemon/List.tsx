import { ComponentPropsWithoutRef, FC } from "react";
import { ShortPokemonEntity } from "../../types/pokemon";

export interface PokemonListProps extends ComponentPropsWithoutRef<"div"> {
  list: ShortPokemonEntity[];
  onPokemonClick: (id: number) => void;
}

export const PokemonList: FC<PokemonListProps> = ({ list, onPokemonClick }) =>
  list.map((p) => (
    <div key={p.id}>
      <a
        href="/"
        onClick={(evt) => {
          evt.preventDefault();
          onPokemonClick(p.id);
        }}
      >
        {p.name}
      </a>
    </div>
  ));
