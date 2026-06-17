import { useEffect, useState } from "react";

export const UseEffectEveryRender = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("Runs on every render");
  });

  return (
    <div>
      <h2>Every Render</h2>
      <p>Count: {count}</p>
      <p>Total: {total}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setTotal(total + 1)}>Increase Total</button>
    </div>
  );
};