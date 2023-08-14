import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";

type CounterEvents = { type: "INCREMENT" };

const counterMachine = createMachine(
  {
    id: "counter",
    initial: "active",
    context: { count: 0 },
    states: {
      active: {
        on: {
          INCREMENT: {
            actions: "increment",
          },
        },
      },
    },
    tsTypes: {} as import("./index.typegen").Typegen0,
    schema: {
      events: {} as CounterEvents,
    },
  },
  {
    actions: {
      increment: assign((context) => ({ count: context.count + 1 })),
    },
  }
);

export const useCounter = () => useMachine(counterMachine);
