import React, { ComponentPropsWithoutRef, FC } from "react";
import { PokemonEntity } from "../../types/pokemon";

export interface PokemonCardProps extends ComponentPropsWithoutRef<"div"> {
  pokemon: PokemonEntity;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => (
  <div className="value-grid">
    {Object.entries(pokemon).map(([key, value]) => (
      <React.Fragment key={key}>
        <div className="parameter">{key}</div>
        <div>{Array.isArray(value) ? value.join(", ") : value}</div>
      </React.Fragment>
    ))}
  </div>
);
