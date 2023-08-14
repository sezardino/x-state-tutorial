import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";

type TemperatureEvents =
  | { type: "CHANGE_C"; value: number }
  | { type: "CHANGE_F"; value: number };

interface TemperatureContext {
  c?: number;
  f?: number;
}

const temperatureMachine = createMachine(
  {
    id: "temperature",
    initial: "active",
    context: { c: undefined, f: undefined } as TemperatureContext,
    states: {
      active: {
        on: {
          CHANGE_C: { actions: "changeC" },
          CHANGE_F: { actions: "changeF" },
        },
      },
    },
    tsTypes: {} as import("./index.typegen").Typegen0,
    schema: {
      events: {} as TemperatureEvents,
    },
  },
  {
    actions: {
      changeC: assign((_, event) => {
        if (event.type !== "CHANGE_C") return {};

        const f = Math.round(event.value * 1.8 + 32);

        return { c: event.value, f };
      }),
      changeF: assign((_, event) => {
        if (event.type !== "CHANGE_F") return {};

        const c = Math.round((event.value - 32) / 1.8);

        return { c, f: event.value };
      }),
    },
  }
);

export const useTemperature = () => useMachine(temperatureMachine);
