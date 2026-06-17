import { useEffect, useState } from "react";

export const UseEffectMountOnly = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Runs only once on mount");
  }, []);

  return (
    <div>
      <h2>Mount Only</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};