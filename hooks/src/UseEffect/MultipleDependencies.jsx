import { useEffect, useState } from "react";

export const UseEffectMultipleDependency = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("Runs when count OR total changes");
  }, [count, total]);

  return (
    <div>
      <h2>Multiple Dependencies</h2>
      <p>Count: {count}</p>
      <p>Total: {total}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setTotal(total + 1)}>Increase Total</button>
    </div>
  );
};