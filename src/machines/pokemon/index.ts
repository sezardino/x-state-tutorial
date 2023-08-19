/* eslint-disable @typescript-eslint/no-explicit-any */
import { createMachine } from "xstate";
import { PokemonEntity } from "../../types/pokemon";

interface Context {
  error: string | null;
  currentPage: number;
  pageCount: number;
  selectedPokemonId: number | null;
  selectedPokemon: PokemonEntity | null;
  data: PokemonEntity[];
}

type Events =
  | {
      type: "Select Pokemon";
      pokemonId: number;
    }
  | {
      type: "Select Page";
      page: number;
    };

type Services = {
  fetchCurrentPage: {
    data: {
      pageCount: number;
      list: PokemonEntity[];
    };
  };
  fetchSelectedPokemon: {
    data: PokemonEntity;
  };
};

export const pokemonMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QAUD2BrMBbVA7AggA6EDEAymADZgDGALgATICGMA2gAwC6iohqsAJZ1BeXiAAeiABwBmAHQAmaQE5pAVgCMHAGwB2adJ07FAGhABPRAFot8-bI4AWWa52bFK9dIC+P82iYOATE8gDiYIyB2HgMADKCsHQkEHhg8oK4AG4Y6dHBRIThkUy5wfGJdAiZOTTMInicXE3i-EINuOJSCMqK8tLOOioqmt7eTurmVghe8nrqHIsqrnoumk6afgFleIXFUTu4FUkkYABOZ6hn8oSU9QBmV1jy+buhEQdBsQlJ1dmodQ6TRaSBAbWEok6oO6vX6g2Gow00gmU0QnicSg4sg8TjkQy0eh0WxArxCRTIAAtUAB3Y6MVD3UpfXCwchUWifGK4EF8AQQsTQxB6RQKLyyRSaWTzdToyaWRAqDGKBYcbROCUqRSLXz+EmHPYfBgUaj0SBMrkpNIZf6YF7694lY0cs2kv61eqQ4HcVp8jpdRAeTSaObaYZ4haGOXTaTBlWLIZ6Ql6FT6Ymkg2O9mmiDm4KnC5XG53OiPM7PdMOxhO7O5vBugEexrcHlg32Q-0IQPBvShtSyHQRjSozureRijwLTQadROIm6iukauc4It8F+wUzZHyHHqAyKZUcYbD6zKeS6WTDQ-KUaLRR+XW4VAQODiBc+9rtjfWHTHyUqbd6I46pJk4HD7mm9pFIapJ0u+-JQqA3TqsO2jSPITiEuo7h6BwWEzjq2zMnslI0nSDAMrWLJweuiGIJO8i7jGMYTJoaiSihmh6HMigDsKsiqDo-HSHoEFEaEJG0gAogWZzUZ+tGdrOoq6J46jisYug-vKnYxpi2I8SKgmKBholchmVZZnQLqHHJAoKcsXG4k46oDrIM6AVp0yKkoPHqLuGzYpq-GmQU4lUrSS7WcytkIZIAZKWOKlijxOiaShWLoZhOgDCoPaYZs95AA */
    id: "PokemonApp",

    initial: "Get Pokemon List",

    context: {
      error: null,
      currentPage: 0,
      pageCount: 0,
      data: [],
      selectedPokemonId: null,
      selectedPokemon: null,
    } as Context,

    tsTypes: {} as import("./index.typegen").Typegen0,

    schema: {
      events: {} as Events,
      services: {} as Services,
    },

    states: {
      "Get Pokemon List": {
        invoke: {
          src: "fetchCurrentPage",
          onDone: {
            target: "Show List of Pokemons",
            actions: "setPokemonsList",
          },
          onError: {
            target: "Show Error",
            actions: "setError",
          },
        },
      },

      "Show List of Pokemons": {
        on: {
          "Select Pokemon": {
            target: "Get Selected Pokemon",
            actions: "setSelectedPokemonId",
          },
        },
      },

      "Show Error": {},

      "Get Selected Pokemon": {
        invoke: {
          src: "fetchSelectedPokemon",
          onDone: [
            {
              target: "Show Selected Pokemon",
              actions: "setSelecedPokemon",
            },
          ],
          onError: {
            target: "Show Error",
            actions: "setError",
          },
        },
      },

      "Show Selected Pokemon": {},
    },

    on: {
      "Select Page": {
        target: ".Get Pokemon List",
        actions: "setCurrentPage",
      },

      "Select Pokemon": {
        target: ".Get Selected Pokemon",
        actions: "setSelectedPokemonId",
      },
    },
  },
  {
    actions: {
      setPokemonsList: (context, event) => {
        context.pageCount = event.data.pageCount;
        context.data = event.data.list;
      },
      setError: (context) => (context.error = "somehting went wrong"),
      setSelecedPokemon: (context, event) =>
        (context.selectedPokemon = event.data),
      setSelectedPokemonId: (context, event) =>
        (context.selectedPokemonId = event.pokemonId),
      setCurrentPage: (context, event) => {
        context.selectedPokemonId = null;
        context.selectedPokemon = null;
        context.currentPage = event.page;
      },
    },
  }
);
