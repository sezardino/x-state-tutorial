// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.PokemonApp.Get Pokemon List:invocation[0]": {
      type: "done.invoke.PokemonApp.Get Pokemon List:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.PokemonApp.Get Selected Pokemon:invocation[0]": {
      type: "done.invoke.PokemonApp.Get Selected Pokemon:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.PokemonApp.Get Pokemon List:invocation[0]": {
      type: "error.platform.PokemonApp.Get Pokemon List:invocation[0]";
      data: unknown;
    };
    "error.platform.PokemonApp.Get Selected Pokemon:invocation[0]": {
      type: "error.platform.PokemonApp.Get Selected Pokemon:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    fetchCurrentPage: "done.invoke.PokemonApp.Get Pokemon List:invocation[0]";
    fetchSelectedPokemon: "done.invoke.PokemonApp.Get Selected Pokemon:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: "fetchCurrentPage" | "fetchSelectedPokemon";
  };
  eventsCausingActions: {
    setCurrentPage: "Select Page";
    setError:
      | "error.platform.PokemonApp.Get Pokemon List:invocation[0]"
      | "error.platform.PokemonApp.Get Selected Pokemon:invocation[0]";
    setPokemonsList: "done.invoke.PokemonApp.Get Pokemon List:invocation[0]";
    setSelecedPokemon: "done.invoke.PokemonApp.Get Selected Pokemon:invocation[0]";
    setSelectedPokemonId: "Select Pokemon";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    fetchCurrentPage: "Select Page" | "xstate.init";
    fetchSelectedPokemon: "Select Pokemon";
  };
  matchesStates:
    | "Get Pokemon List"
    | "Get Selected Pokemon"
    | "Show Error"
    | "Show List of Pokemons"
    | "Show Selected Pokemon";
  tags: never;
}
