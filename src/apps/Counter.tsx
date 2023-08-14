import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useCounter } from "../machines/counter";

export const CounterApp = () => {
  const [state, send] = useCounter();

  return (
    <div className="grid grid-cols-1 gap-4">
      <Input value={state.context.count} type="number" disabled />
      <Button onClick={() => send("INCREMENT")}>increment</Button>
    </div>
  );
};
