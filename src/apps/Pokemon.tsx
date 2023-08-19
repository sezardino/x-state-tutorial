/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { PokemonCard } from "../components/pokemon/Card";
import { PokemonImage } from "../components/pokemon/Image";
import { PokemonList } from "../components/pokemon/List";
import { Pagination } from "../components/pokemon/Pagination";
import { PokemonEntity, ShortPokemonEntity } from "../types/pokemon";

export const PokemonApp = () => {
  const error = false;
  const pageCount = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const pokemonList: ShortPokemonEntity[] = [];
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonEntity | null>(
    null
  );
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(
    null
  );

  return (
    <div className="app">
      {error && <div>We encountered an error. Please try again later.</div>}
      {!error && (
        <div className="container">
          <div>
            <PokemonList
              list={pokemonList}
              onPokemonClick={(id) => setSelectedPokemonId(id)}
            />
            <Pagination
              pageCount={pageCount}
              onPageClick={(page) => setCurrentPage(page)}
            />
          </div>
          {selectedPokemon && (
            <>
              <div>
                <PokemonCard pokemon={selectedPokemon} />
              </div>
              <div>
                <PokemonImage
                  pokemonId={selectedPokemon.id}
                  name={selectedPokemon.name}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
