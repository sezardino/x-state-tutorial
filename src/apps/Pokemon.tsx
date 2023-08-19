/* eslint-disable @typescript-eslint/no-unused-vars */

import { useMachine } from "@xstate/react";
import { PokemonCard } from "../components/pokemon/Card";
import { PokemonImage } from "../components/pokemon/Image";
import { PokemonList } from "../components/pokemon/List";
import { Pagination } from "../components/pokemon/Pagination";
import { pokemonMachine } from "../machines/pokemon";
import "./Pokemon.css";

export const PokemonApp = () => {
  const [
    {
      value,
      context: { error, pageCount, selectedPokemon, data },
    },
    send,
  ] = useMachine(pokemonMachine, {
    services: {
      fetchSelectedPokemon: (context) =>
        fetch(`/pokemon/${context.selectedPokemonId}.json`).then((res) =>
          res.json()
        ),
      fetchCurrentPage: (context) =>
        fetch(`/pages/${context.currentPage}.json`).then((res) => res.json()),
    },
  });

  return (
    <div className="app">
      {error && <div>{error}</div>}
      {!error && (
        <div className="container">
          <div>
            <PokemonList
              list={data}
              onPokemonClick={(pokemonId) =>
                send({ type: "Select Pokemon", pokemonId })
              }
            />
            <Pagination
              pageCount={pageCount}
              onPageClick={(page) => send({ type: "Select Page", page })}
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
