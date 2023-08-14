import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Option, Select } from "../components/Select";
import { TripType, useFlightBroker } from "../machines/flight-broker";

export const FlightBroker = () => {
  const [state, send] = useFlightBroker();

  const selectOptions: Option[] = [
    { value: "", label: "none" },
    { value: "one-way", label: "one way" },
    { value: "round-trip", label: "with return" },
  ];

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    send("SUBMIT");
  };

  return (
    <form className="grid grid-cols-1 gap-5" onSubmit={submitHandler}>
      <Select
        onChange={(evt) =>
          send({
            type: "CHANGE_TYPE",
            value: evt.currentTarget.value as TripType,
          })
        }
        options={selectOptions}
      />
      {JSON.stringify(state.context)}
      {JSON.stringify(state)}
      <Input type="date" name="start" disabled={!state.context.type} />
      <Input
        type="date"
        name="return"
        disabled={state.context.type !== "round-trip"}
      />
      <Button type="submit">Book</Button>
    </form>
  );
};
