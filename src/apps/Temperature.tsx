import { Input } from "../components/Input";
import { useTemperature } from "../machines/temperature";

export const TemperatureApp = () => {
  const [state, send] = useTemperature();

  return (
    <div>
      <Input
        type="number"
        placeholder="C"
        value={state.context.c}
        onChange={(evt) =>
          send({ type: "CHANGE_C", value: +evt.currentTarget.value })
        }
      />
      <Input
        type="number"
        placeholder="F"
        value={state.context.f}
        onChange={(evt) =>
          send({ type: "CHANGE_F", value: +evt.currentTarget.value })
        }
      />
    </div>
  );
};
