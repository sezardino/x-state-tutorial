import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";

export type TripType = "one-way" | "round-trip";

interface FlightBrokerContext {
  type?: TripType;
  start?: Date;
  return?: Date;
}

type FlightBrokerEvent =
  | { type: "CHANGE_TYPE"; value: TripType }
  | { type: "CHANGE_START"; value: Date }
  | { type: "CHANGE_RETURN"; value: Date }
  | { type: "SUBMIT" };

const flightBrokerMachine = createMachine(
  {
    id: "flightBroker",
    initial: "active",
    context: {
      type: undefined,
      return: undefined,
      start: undefined,
    } as FlightBrokerContext,
    tsTypes: {} as import("./index.typegen").Typegen0,
    schema: {
      events: {} as FlightBrokerEvent,
    },
    states: {
      active: {
        on: {
          CHANGE_TYPE: {
            actions: "changeType",
          },
          CHANGE_START: {
            actions: "changeStart",
            cond: (context) => context.type === "one-way",
          },
          CHANGE_RETURN: {
            actions: "changeReturn",
            cond: (context) => context.type === "round-trip",
          },
          SUBMIT: {
            target: "submitted",
            cond: (context) => {
              if (context.type === "one-way") {
                return !!context.start;
              }

              if (context.type === "round-trip") {
                return !!context.start && !!context.return;
              }

              return false;
            },
          },
        },
      },
      submitted: {
        type: "final",
      },
    },
  },
  {
    actions: {
      changeType: assign((_, event) => {
        if (event.type !== "CHANGE_TYPE") return {};

        return { type: event.value };
      }),
      changeStart: assign((_, event) => {
        if (event.type !== "CHANGE_START") return {};

        return { start: event.value };
      }),
      changeReturn: assign((_, event) => {
        if (event.type !== "CHANGE_RETURN") return {};

        return { return: event.value };
      }),
    },
  }
);

export const useFlightBroker = () => useMachine(flightBrokerMachine);
