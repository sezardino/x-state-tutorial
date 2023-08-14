import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

type TemperatureEvents =
  | { type: "CHANGE_C"; value: number }
  | { type: "CHANGE_F"; value: number };

const temperatureMachine = createMachine({
  id: "temperature",
  tsTypes: {} as import("./index.typegen").Typegen0,
  schema: {
    events: {} as TemperatureEvents,
  },
});

export const useTemperature = () => useMachine(temperatureMachine);
