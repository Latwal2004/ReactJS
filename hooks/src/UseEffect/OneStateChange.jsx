import { useEffect, useState } from "react";

export const UseEffectSingleDependency = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("Runs only when count changes");
  }, [count]);

  return (
    <div>
      <h2>Single Dependency</h2>
      <p>Count: {count}</p>
      <p>Total: {total}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setTotal(total + 1)}>Increase Total</button>
    </div>
  );
};